import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM, UPLOAD_FILE } from "./ProductWrite.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { schema } from "./ProductWrite.validation";
import ProductWriteUI from "./ProductWrite.presenter";
import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

export default function ProductWrite(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [files, setFiles] = useState<(File | null)[]>(
    new Array(10).fill(1).map((_) => null)
  );
  // const [fileIds] = useState<string[]>(
  //   new Array(10).fill(1).map((_) => uuidv4())
  // );
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  async function onClickSubmit(data: any) {
    // onChangeFiles 함수로 전달받은 files를 [uploadFile]하고, 추출된 url을 변수 myImage에 저장
    const uploadFiles = files
      .filter((el) => el)
      .map((el) => uploadFile({ variables: { file: el } }));
    const resultFiles = await Promise.all(uploadFiles);
    const myImages = resultFiles.map((el) => el.data.uploadFile.url);

    const result = await createUseditem({
      variables: {
        createUseditemInput: {
          name: data.name,
          remarks: data.remarks,
          contents: data.contents,
          price: data.price,
          useditemAddress: {
            zipcode,
            address,
            addressDetail: data.addressDetail,
          },
          images: [...myImages],
          tags: ["판매중"],
        },
      },
    });
    console.log("useFome data", data);
    router.push(`/posh/products/${result.data?.createUseditem._id}`);
  }

  function handleComplete(data: any) {
    setZipcode(data.zonecode);
    setAddress(data.query);
    setIsOpen(false);
    console.log("postcode data", data);
  }

  function onClickZipcodeBtn() {
    setIsOpen(true);
  }

  // 파일 전달받는 함수 => newFiles state에 저장
  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
    console.log("함수실행", files);
  }

  return (
    <ProductWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      handleComplete={handleComplete}
      isOpen={isOpen}
      onClickZipcodeBtn={onClickZipcodeBtn}
      onChangeFiles={onChangeFiles}
      // fileIds={fileIds}
    />
  );
}

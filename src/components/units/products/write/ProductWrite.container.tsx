import { useMutation } from "@apollo/client";
import {
  CREATE_USEDITEM,
  UPLOAD_FILE,
  UPDATE_USEDITEM,
} from "./ProductWrite.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { schema } from "./ProductWrite.validation";
import { schema2 } from "./ProductWrite.validation2";
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
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(props.isEdit ? schema2 : schema),
  });
  // props.isEdit ? console.log("수정") : console.log("등록");
  const router = useRouter();

  // 파일 전달받는 함수 => newFiles state에 저장
  function onChangeFiles(file: File, index: number) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  // 상품등록 ///////////////////////////////////////////////////////////////////
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
  // 상품수정 ///////////////////////////////////////////////////////////////////
  const myUpdateUseditemInput = {};

  async function onClickEdit(data: any) {
    if (data.name) myUpdateUseditemInput.name = data.name;
    if (data.price) myUpdateUseditemInput.price = data.price;
    if (data.remarks) myUpdateUseditemInput.remarks = data.remarks;
    if (data.contents) myUpdateUseditemInput.contents = data.contents;
    if (data.tags) myUpdateUseditemInput.tags = data.tags;

    await updateUseditem({
      variables: {
        useditemId: router.query.poshId,
        updateUseditemInput: myUpdateUseditemInput,
      },
    });
    console.log("useFome updatedata", data);
    router.push(`/posh/products/${router.query.poshId}`);
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
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
    />
  );
}

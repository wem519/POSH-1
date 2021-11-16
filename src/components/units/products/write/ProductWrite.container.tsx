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
import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import { IMyUpdateProductInput } from "./ProductWrite.types";

export default function ProductWrite(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [files, setFiles] = useState<(File | null)[]>(
    new Array(10).fill(1).map((_) => null)
  );
  // const [fileIds] = useState<string[]>(
  //   new Array(10).fill(1).map((_) => uuidv4())
  // );
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const [updateUseditem] = useMutation(UPDATE_USEDITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
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
    const uploadFiles = files.map((el) => el ? uploadFile({ variables: { file: el } }) : null); // prettier-ignore
    const resultFiles = await Promise.all(uploadFiles);
    const myImages = resultFiles.map((el) => el?.data.uploadFile.url || "");

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
    setAddressDetail(data.addressDetail); // state에도 저장해야 새로 입력한(현재상태의) 상세주소 defaultValue로 보여줄 수 있음
  }
  // 상품수정 ///////////////////////////////////////////////////////////////////
  // 수정시에도 상품명, 가격 유효성검사를 위해 새로 입력해야하는 것 방지 -> 기존 값 setValue로 넣어주고 trigger로 알리기
  useEffect(() => {
    if (props.isEdit && props.data?.fetchUseditem) {
      setValue("price", props.data?.fetchUseditem.price);
      trigger("price");
      setValue("name", props.data?.fetchUseditem.name);
      trigger("name");
    }
  }, [props.data]);

  const myUpdateUseditemInput: IMyUpdateProductInput = {};

  async function onClickEdit(data: any) {
    if (data.name) myUpdateUseditemInput.name = data.name;
    if (data.price) myUpdateUseditemInput.price = data.price;
    if (data.remarks) myUpdateUseditemInput.remarks = data.remarks;
    if (data.contents) myUpdateUseditemInput.contents = data.contents;
    if (data.tags) myUpdateUseditemInput.tags = data.tags;
    if (zipcode || address || addressDetail) {
      myUpdateUseditemInput.useditemAddress = {};
      if (zipcode) myUpdateUseditemInput.useditemAddress.zipcode = zipcode;
      if (address) myUpdateUseditemInput.useditemAddress.address = address;
      if (addressDetail)
        myUpdateUseditemInput.useditemAddress.addressDetail = addressDetail;
    }

    // 수정페이지에서 새로 업로드한 이미지들 업로드해서 nextImages에 담기
    const uploadFiles = files
      .map((el) => (el ? uploadFile({ variables: { file: el } }) : null)); // prettier-ignore
    const resultFiles = await Promise.all(uploadFiles);
    const nextImages = resultFiles.map((el) => el?.data.uploadFile.url || "");
    myUpdateUseditemInput.images = nextImages;
    console.log("새이미지", nextImages);

    // 기존이미지에 추가된 사진 업데이트하기
    if (props.data?.fetchUseditem.images?.length) {
      const prevImages = [...props.data?.fetchUseditem.images];
      myUpdateUseditemInput.images = prevImages.map((el, index) => nextImages[index] || el); // prettier-ignore
    } else {
      myUpdateUseditemInput.images = nextImages;
    }

    await updateUseditem({
      variables: {
        useditemId: router.query.poshId,
        updateUseditemInput: myUpdateUseditemInput,
      },
    });
    // console.log("useFome updatedata", data);
    console.log("수정인풋", myUpdateUseditemInput);
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
      data={props.data}
      address={address}
      zipcode={zipcode}
      addressDetail={addressDetail}
    />
  );
}

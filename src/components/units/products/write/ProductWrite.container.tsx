import { useMutation } from "@apollo/client";
import { CREATE_USEDITEM } from "./ProductWrite.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { schema } from "./ProductWrite.validation";
import ProductWriteUI from "./ProductWrite.presenter";
import { useState } from "react";

export default function ProductWrite(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [createUseditem] = useMutation(CREATE_USEDITEM);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  async function onClickSubmit(data: any) {
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
          images: [
            "https://i.pinimg.com/564x/6f/68/aa/6f68aa345d193cf3afa4fdaca8993ff8.jpg",
          ],
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

  return (
    <ProductWriteUI
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickSubmit={onClickSubmit}
      handleComplete={handleComplete}
      isOpen={isOpen}
      onClickZipcodeBtn={onClickZipcodeBtn}
    />
  );
}

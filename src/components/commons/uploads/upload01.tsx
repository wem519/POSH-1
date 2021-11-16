import styled from "@emotion/styled";
import { useState, useRef, ChangeEvent } from "react";

const UploadBtn = styled.button`
  width: 68px;
  height: 68px;
  border-style: none;
  margin: 2px;
  background-color: #b69acb;
`;
const UploadImage = styled.img`
  width: 68px;
  height: 68px;
  margin: 2px;
`;
const InputFileHidden = styled.input`
  display: none;
`;

function Upload01(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preImg, setPreImg] = useState(""); // 임시미리보기

  function onClickUpload() {
    fileRef.current?.click();
  }

  function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target?.files?.[0];
    console.log("파일정보", file);
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setPreImg(data.target?.result as string); // 임시미리보기 저장 => 이게 안됨!!!
      props.onChangeFiles(file, props.index); // 진짜파일은 함수에 전달
    };
  }

  return (
    <>
      {preImg || props.defaultValue ? (
        <UploadImage
          onClick={onClickUpload}
          src={preImg || `https://storage.googleapis.com/${props.defaultValue}`}
        />
      ) : (
        <UploadBtn type="button" onClick={onClickUpload}>
          +
        </UploadBtn>
      )}
      <InputFileHidden type="file" ref={fileRef} onChange={onChangeFile} />
    </>
  );
}

export default Upload01;

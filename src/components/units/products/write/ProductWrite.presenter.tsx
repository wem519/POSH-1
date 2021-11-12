import {
  Wrapper,
  UploadBtn,
  UploadBox,
  WriteWrapper,
  SubmitBtn,
  EditBtn,
  ErrMsg,
  Select,
} from "./ProductWrite.styles";
import LayoutFooterM from "../../../commons/layout/footer_mobile/LayoutFooterMobile";
import LayoutHeader from "../../../commons/layout/header/LayoutHeader";
import Input01 from "../../../commons/inputs/input01";
import Input02 from "../../../commons/inputs/input02";
import Address01 from "../../../commons/address/address01";
import { v4 as uuidv4 } from "uuid";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

export default function ProductWriteUI(props: any) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
      {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.handleComplete} />
        </Modal>
      )}
      <LayoutHeader />
      <Wrapper>
        <UploadBox>
          {new Array(5).fill(1).map((el) => (
            <UploadBtn key={uuidv4()}>+</UploadBtn>
          ))}
        </UploadBox>
        <UploadBox>
          {new Array(5).fill(1).map((el) => (
            <UploadBtn key={uuidv4()}>+</UploadBtn>
          ))}
        </UploadBox>
        <WriteWrapper>
          <Input01
            type="text"
            label="상품명*"
            placeholder="상품명을 입력해주세요"
            register={props.register("name")}
          />
          <ErrMsg>{props.formState.errors.name?.message}</ErrMsg>
          <Input01
            type="text"
            label="가격*"
            placeholder="가격을 입력해주세요"
            register={props.register("price")}
          />
          <ErrMsg>{props.formState.errors.price?.message}</ErrMsg>
          <Input02
            label="상세설명*"
            placeholder="상품 상세 설명을 입력해주세요&#13;&#10;
        ex. 사이즈, 색상 등"
            register={props.register("contents")}
          />
          <ErrMsg>{props.formState.errors.contents?.message}</ErrMsg>
          <Address01
            register={props.register("addressDetail")}
            onClickZipcodeBtn={props.onClickZipcodeBtn}
          />
          <Select {...props.register("remarks")}>
            <option value="직거래">직거래</option>
            <option value="택배">택배</option>
            <option value="직거래+택배">직거래+택배</option>
          </Select>
          {props.isEdit ? (
            <EditBtn>수정하기</EditBtn>
          ) : (
            <SubmitBtn type="submit" isValid={props.formState.isValid}>
              등록하기
            </SubmitBtn>
          )}
        </WriteWrapper>
      </Wrapper>
      <LayoutFooterM />
    </form>
  );
}

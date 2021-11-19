import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .max(30, "30자 이내로 입력해주세요!")
    .required("제목을 입력해주세요!"),
  category: yup.string().required("카테고리를 선택해주세요!"),
  price: yup
    .number()
    .required("가격을 입력해주세요!")
    .min(0)
    .typeError("숫자만 입력해주세요!"),
  contents: yup.string().required("상세내용을 입력해주세요!"),
  address: yup.string().required("주소를 입력해주세요!"),
});

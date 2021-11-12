import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("제목을 입력해주세요!"),
  price: yup
    .number()
    .required("가격을 입력해주세요!")
    .min(0)
    .typeError("숫자만 입력해주세요!"),
  contents: yup.string().required("상세내용을 입력해주세요!"),
});

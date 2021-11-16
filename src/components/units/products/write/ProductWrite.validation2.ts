import * as yup from "yup";

export const schema2 = yup.object({
  name: yup.string().max(30, "30자 이내로 입력해주세요!"),
  price: yup.number().min(0).typeError("숫자만 입력해주세요!"),
});

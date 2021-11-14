import * as yup from "yup";

export const schema2 = yup.object({
  price: yup.number().min(0).typeError("숫자만 입력해주세요!"),
});

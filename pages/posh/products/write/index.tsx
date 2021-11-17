import { WithAuth } from "../../../../src/components/commons/hocs/WithAuth";
import ProductWrite from "../../../../src/components/units/products/write/ProductWrite.container";

const ProductWritePage = () => {
  return <ProductWrite />;
};

export default WithAuth(ProductWritePage);

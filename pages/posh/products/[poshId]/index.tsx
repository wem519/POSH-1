import { WithAuth } from "../../../../src/components/commons/hocs/WithAuth";
import ProductDetail from "../../../../src/components/units/products/detail/ProductDetail.container";

const ProductDetailPage = () => {
  return <ProductDetail />;
};

export default WithAuth(ProductDetailPage);

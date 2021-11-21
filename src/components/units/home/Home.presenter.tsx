import {
  Wrapper,
  Products,
  ProductItem,
  ProductImgWrapper,
  CateWrapper,
  Category,
  CateDiv,
  ProductPrice,
  ProductImg,
} from "./Home.styles";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";

export default function HomeUI(props: any) {
  const router = useRouter();

  const onClickDetail = (e: any) => {
    router.push(`/posh/products/${e.currentTarget.id}`);
  };

  function onClickCategory(event: any) {
    router.push(`/posh/${event.target.id}`);
  }

  return (
    <>
      <CateWrapper>
        <CateDiv>
          <li>
            <Category onClick={onClickCategory} id="top">
              Top
            </Category>
          </li>
          <li>
            <Category onClick={onClickCategory} id="bottom">
              Bottom
            </Category>
          </li>
          <li>
            <Category onClick={onClickCategory} id="shoes">
              Shoes
            </Category>
          </li>
          <li>
            <Category onClick={onClickCategory} id="bag">
              Bag
            </Category>
          </li>
          <li>
            <Category onClick={onClickCategory} id="ect">
              ect
            </Category>
          </li>
        </CateDiv>
      </CateWrapper>
      <Wrapper>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.lodeMore}
          hasMore={true}
          useWindow={true}
        >
          {props.data && (
            <Products>
              {props.data?.fetchUseditems.map((el: any, index: any) => (
                <ProductItem key={index} id={el._id} onClick={onClickDetail}>
                  <ProductImgWrapper>
                    <ProductImg
                      src={
                        el.images.filter((el: any) => el)[0]
                          ? `https://storage.googleapis.com/${
                              el.images.filter((el: any) => el)[0]
                            }`
                          : "/images/noImage.png"
                      }
                    />
                  </ProductImgWrapper>
                  <ProductPrice>
                    {el.name}
                    <br />
                    {el.price.toLocaleString()}원
                  </ProductPrice>
                </ProductItem>
              ))}
            </Products>
          )}
        </InfiniteScroll>
      </Wrapper>
    </>
  );
}

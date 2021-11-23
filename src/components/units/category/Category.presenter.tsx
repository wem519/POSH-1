import {
  Wrapper,
  CateWrapper,
  Category,
  CateDiv,
  ContentsWrapper,
  Products,
  ProductItem,
  ProductImg,
  ProductImgWrapper,
  ProductPrice,
} from "./Category.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

export default function CategoryUI(props: any) {
  return (
    <Wrapper>
      <CateWrapper>
        <CateDiv>
          <Category
            onClick={props.onClickCategory}
            id="top"
            router={props.router}
          >
            Top
          </Category>
          <Category
            onClick={props.onClickCategory}
            id="bottom"
            router={props.router}
          >
            Bottom
          </Category>
          <Category
            onClick={props.onClickCategory}
            id="shoes"
            router={props.router}
          >
            Shoes
          </Category>
          <Category
            onClick={props.onClickCategory}
            id="bag"
            router={props.router}
          >
            Bag
          </Category>
          <Category
            onClick={props.onClickCategory}
            id="acc"
            router={props.router}
          >
            Acc
          </Category>
        </CateDiv>
      </CateWrapper>
      <ContentsWrapper>
        {props.data && (
          <InfiniteScroll
            pageStart={0}
            loadMore={props.lodeMore}
            hasMore={true}
            useWindow={true}
          >
            <Products>
              {props.data?.fetchUseditems
                .filter((el: any) => el.tags[1] === props.router.query.category)
                .map((el: any, index: any) => (
                  <ProductItem
                    key={uuidv4()}
                    id={el._id}
                    onClick={props.onClickDetail}
                  >
                    <ProductImgWrapper>
                      <ProductImg
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
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
          </InfiniteScroll>
        )}
      </ContentsWrapper>
    </Wrapper>
  );
}

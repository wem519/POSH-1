import {
  Wrapper,
  BodyWrpper,
  BodyBox,
  ProductImg,
  CateWrapper,
  Category,
  CateDiv,
  ProductPrice,
} from "./Home.styles";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";

export default function HomeUI(props: any) {
  const router = useRouter();

  const onClickDetail = (e: any) => {
    router.push(`/posh/products/${e.currentTarget.id}`);
  };

  return (
    <>
      <CateWrapper>
        <CateDiv>
          <li>
            <Category>Top</Category>
          </li>
          <li>
            <Category>Bottom</Category>
          </li>
          <li>
            <Category>Shoes</Category>
          </li>
          <li>
            <Category>Bag</Category>
          </li>
          <li>
            <Category>ect</Category>
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
          <BodyWrpper>
            {props.data?.fetchUseditems.map((el: any, index: any) => (
              <BodyBox key={index} id={el._id} onClick={onClickDetail}>
                <ProductImg>
                  <img style={{objectFit:"cover", width:"100%", height:"100%"}} src=
                  {el.images.filter((el: any) => el)[0]
                    ? `https://storage.googleapis.com/${
                        el.images.filter((el: any) => el)[0]
                      }`
                    : "/images/noImage.png"} />
                </ProductImg>
                <ProductPrice>{el.name}<br/>{el.price.toLocaleString()}원</ProductPrice>
              </BodyBox>
            ))}
          </BodyWrpper>
        </InfiniteScroll>
      </Wrapper>
    </>
  );
}

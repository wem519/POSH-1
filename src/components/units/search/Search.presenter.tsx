import {
  Wrapper,
  Search,
  BodyWrpper,
  BodyBox,
  ProductImg,
  SearchBnt,
  SearchWrapper,
} from "./Search.styles";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";
export default function SearchUI(props: any) {
  const router = useRouter();

  const onClickDetail = (e: any) => {
    router.push(`/posh/products/${e.currentTarget.id}`);
  };

  return (
    <Wrapper>
      <SearchWrapper>
        <Search
          onChange={props.onChangeSearch}
          placeholder="검색어를 입력해주세요"
        ></Search>
        <SearchBnt onClick={props.onClickSearch}></SearchBnt>
      </SearchWrapper>
      {props.data && (
        <InfiniteScroll
          pageStart={0}
          loadMore={props.lodeMore}
          hasMore={true}
          useWindow={true}
        >
          <BodyWrpper>
            {props.data?.fetchUseditems.map((el: any, index: any) => (
              <BodyBox key={index} id={el._id} onClick={onClickDetail}>
                <ProductImg
                  src={
                    el.images.filter((el: any) => el)[0]
                      ? `https://storage.googleapis.com/${
                          el.images.filter((el: any) => el)[0]
                        }`
                      : "/images/noImage.png"
                  }
                />
              </BodyBox>
            ))}
          </BodyWrpper>
        </InfiniteScroll>
      )}
    </Wrapper>
  );
}

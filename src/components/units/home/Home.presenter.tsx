import {
  Wrapper,
  Search,
  BodyWrpper,
  BodyBox,
  ProductImg,
  SearchBnt,
  SearchWrapper,
} from "./Home.styles";
import InfiniteScroll from 'react-infinite-scroller'
import { useRouter } from "next/router";

export default function HomeUI(props: any) {
  const router = useRouter()
  
  const onClickDetail = (e) => {
    router.push(`/posh/products/${e.currentTarget.id}`);
  };



  return (
    <Wrapper>
      {/* <SearchWrapper>
        <Search
          onChange={props.onChangeSearch}
          placeholder="검색어를 입력해주세요"
        ></Search>
        <SearchBnt onClick={props.onClickSearch}></SearchBnt>
      </SearchWrapper> */}
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
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                />
              </BodyBox>
            ))}
          </BodyWrpper>
        </InfiniteScroll>

    </Wrapper>
  );
}

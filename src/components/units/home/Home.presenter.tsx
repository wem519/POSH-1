import {
  Wrapper,
  Search,
  BodyWrpper,
  BodyBox,
  ProductImg,
  SearchBnt,
  SearchWrapper,
} from "./Home.styles";

export default function HomeUI(props: any) {
  return (
    <Wrapper>
      <SearchWrapper>
        <Search
          onChange={props.onChangeSearch}
          placeholder="검색어를 입력해주세요"
        ></Search>
        <SearchBnt onClick={props.onClickSearch}></SearchBnt>
      </SearchWrapper>
      <BodyWrpper>
        {props.data?.fetchUseditems.map((el: any, index: any) => (
          <BodyBox key={index}>
            <ProductImg
              src={`https://storage.googleapis.com/${el.images[0]}`}
            />
          </BodyBox>
        ))}
      </BodyWrpper>
    </Wrapper>
  );
}

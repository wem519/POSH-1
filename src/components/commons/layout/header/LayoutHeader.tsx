import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../../units/products/detail/ProductDetail.queries";
import {
  Wrapper,
  ContnesWrpper,
  HeaderLogo,
  HeaderLogo2,
  SearchWrapper,
  Search,
  SearchBnt,
  HomeBtn,
  SearchBtn,
  WriteBtn,
  ChatBtn,
  MyPageBtn,
  IconBox,
  IconWrapper,
  Profile,
  ProfileBox,
} from "./LayoutHeader.styles";

export default function LayoutHeader() {
  const router = useRouter();

  function onClickMove(event: any) {
    router.push(event.currentTarget.id);
  }
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return (
    <Wrapper>
      <HeaderLogo2>POSH</HeaderLogo2>
      <ContnesWrpper>
        <HeaderLogo>POSH</HeaderLogo>
        <SearchWrapper>
          <Search placeholder="검색"></Search>
          <SearchBnt></SearchBnt>
        </SearchWrapper>
        <IconWrapper>
          <IconBox onClick={onClickMove} id="/posh/home">
            <HomeBtn />
          </IconBox>
          <IconBox onClick={onClickMove} id="/posh/search">
            <SearchBtn />
          </IconBox>
          <IconBox onClick={onClickMove} id="/posh/products/write">
            <WriteBtn />
          </IconBox>
          <IconBox onClick={onClickMove} id="/posh/user/chat">
            <ChatBtn />
          </IconBox>
          {data?.fetchUserLoggedIn.picture ? (
            <IconBox>
              <Profile src={data?.fetchUserLoggedIn.picture} />
            </IconBox>
          ) : (
            <IconBox onClick={onClickMove} id="/posh/user/mypage">
              <MyPageBtn />
            </IconBox>
          )}
        </IconWrapper>
      </ContnesWrpper>
    </Wrapper>
  );
}

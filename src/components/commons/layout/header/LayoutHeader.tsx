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
  CategoryBtn,
  Category,
  CategoryList,
  CategoryName,
} from "./LayoutHeader.styles";
import { GlobalContext } from "../../../../../pages/_app";
import { useContext, useState } from "react";

export default function LayoutHeader() {
  const { setSearch }: any = useContext(GlobalContext);
  const [mySearch, setMySearch] = useState("");

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onChangeSearch = (e: any) => {
    setMySearch(e.target.value);
  };
  const onClickSearch = () => {
    setSearch(mySearch);
  };

  function onClickMove(event: any) {
    router.push(event.currentTarget.id);
  }

  function onClickOpen() {
    setIsOpen((prev) => !prev);
  }

  function onClickCategory(event: any) {
    router.push(`/posh/${event.target.id}`);
    setIsOpen(false);
  }

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return (
    <Wrapper>
      <Category isOpen={isOpen}>
        <CategoryList isOpen={isOpen}>
          <CategoryName onClick={onClickCategory} id="top">
            Top
          </CategoryName>
          <CategoryName onClick={onClickCategory} id="bottom">
            Bottom
          </CategoryName>
          <CategoryName onClick={onClickCategory} id="shoes">
            Shoes
          </CategoryName>
          <CategoryName onClick={onClickCategory} id="bag">
            Bag
          </CategoryName>
          <CategoryName onClick={onClickCategory} id="etc">
            Etc
          </CategoryName>
        </CategoryList>
      </Category>
      <CategoryBtn onClick={onClickOpen} isOpen={isOpen}></CategoryBtn>
      <HeaderLogo2 onClick={onClickMove} id="/posh/home">
        POSH
      </HeaderLogo2>
      <ContnesWrpper>
        <HeaderLogo onClick={onClickMove} id="/posh/home">
          POSH
        </HeaderLogo>
        <SearchWrapper>
          <Search placeholder="검색" onChange={onChangeSearch} />
          <SearchBnt onClick={onClickSearch}></SearchBnt>
        </SearchWrapper>
        <IconWrapper>
          <IconBox onClick={onClickMove} id="/posh/home">
            <HomeBtn />
          </IconBox>
          <IconBox onClick={onClickMove} id="/posh/products/write">
            <WriteBtn />
          </IconBox>
          <IconBox onClick={onClickMove} id="/posh/user/chat">
            <ChatBtn />
          </IconBox>
          {data?.fetchUserLoggedIn.picture ? (
            <IconBox>
              <Profile
                src={data?.fetchUserLoggedIn.picture}
                onClick={onClickMove}
                id="/posh/user/mypage"
              />
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

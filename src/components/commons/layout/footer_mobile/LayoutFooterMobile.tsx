import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import PersonIcon from "@mui/icons-material/Person";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f3f3f3;
  font-family: "NotoSansKRregular";
  position: fixed;
  bottom: 0;
`;
const HomeBtn = styled(HomeIcon)`
  font-size: 28px;
  color: purple;
`;
const SearchBtn = styled(SearchIcon)`
  font-size: 28px;
  /* color: purple; */
  color: gray;
`;
const WriteBtn = styled(LocalParkingIcon)`
  font-size: 28px;
  /* color: purple; */
  color: gray;
`;
const ChatBtn = styled(ForumIcon)`
  font-size: 26px;
  /* color: purple; */
  color: gray;
`;
const MyPageBtn = styled(PersonIcon)`
  font-size: 32px;
  /* color: purple; */
  color: gray;
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 78px;
  padding: 6px 0px 6px 0px;
`;
const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonLabel = styled.div`
  font-size: 12px;
  color: gray;
`;

export default function LayoutFooterM() {
  const router = useRouter();

  function onClickMove(event: any) {
    router.push(event.currentTarget.id);
  }

  return (
    <Wrapper>
      <Button onClick={onClickMove} id="/posh/home">
        <IconWrapper>
          <HomeBtn />
        </IconWrapper>
        <ButtonLabel>홈</ButtonLabel>
      </Button>
      <Button onClick={onClickMove} id="/posh/search">
        <IconWrapper>
          <SearchBtn />
        </IconWrapper>
        <ButtonLabel>검색</ButtonLabel>
      </Button>
      <Button onClick={onClickMove} id="/posh/products/write">
        <IconWrapper>
          <WriteBtn />
        </IconWrapper>
        <ButtonLabel>등록</ButtonLabel>
      </Button>
      <Button onClick={onClickMove} id="/posh/user/chat">
        <IconWrapper>
          <ChatBtn />
        </IconWrapper>
        <ButtonLabel>채팅</ButtonLabel>
      </Button>
      <Button onClick={onClickMove} id="/posh/user/mypage">
        <IconWrapper>
          <MyPageBtn />
        </IconWrapper>
        <ButtonLabel>MY</ButtonLabel>
      </Button>
    </Wrapper>
  );
}

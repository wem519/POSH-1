import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import PersonIcon from "@mui/icons-material/Person";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

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
  color: purple;
`;
const WriteBtn = styled(LocalParkingIcon)`
  font-size: 28px;
  color: purple;
`;
const ChatBtn = styled(ForumIcon)`
  font-size: 26px;
  color: purple;
`;
const MyPageBtn = styled(PersonIcon)`
  font-size: 32px;
  color: purple;
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
`;

export default function LayoutFooterM() {
  return (
    <Wrapper>
      <Button>
        <IconWrapper>
          <HomeBtn />
        </IconWrapper>
        <ButtonLabel>홈</ButtonLabel>
      </Button>
      <Button>
        <IconWrapper>
          <SearchBtn />
        </IconWrapper>
        <ButtonLabel>검색</ButtonLabel>
      </Button>
      <Button>
        <IconWrapper>
          <WriteBtn />
        </IconWrapper>
        <ButtonLabel>등록</ButtonLabel>
      </Button>
      <Button>
        <IconWrapper>
          <ChatBtn />
        </IconWrapper>
        <ButtonLabel>채팅</ButtonLabel>
      </Button>
      <Button>
        <IconWrapper>
          <MyPageBtn />
        </IconWrapper>
        <ButtonLabel>MY</ButtonLabel>
      </Button>
    </Wrapper>
  );
}

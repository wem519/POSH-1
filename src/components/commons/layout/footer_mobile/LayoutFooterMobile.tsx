import styled from "@emotion/styled";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f3f3f3;
  font-family: "NotoSansKRregular";
  /* width: 100vw; */
  @media all and (min-width: 600px) {
    display: none;
  }
`;
interface IProps {
  pagenow: string;
  id: string;
}
const HomeBtn = styled(HomeOutlinedIcon)`
  font-size: 28px;
  color: ${(props: IProps) => (props.id === props.pagenow ? "purple" : "grey")};
`;
const SearchBtn = styled(SearchIcon)`
  font-size: 28px;
  color: ${(props: IProps) => (props.id === props.pagenow ? "purple" : "grey")};
`;
const WriteBtn = styled(CheckroomOutlinedIcon)`
  font-size: 28px;
  color: ${(props: IProps) => (props.id === props.pagenow ? "purple" : "grey")};
  margin-bottom: 2px;
`;
const ChatBtn = styled(ForumOutlinedIcon)`
  font-size: 26px;
  color: ${(props: IProps) => (props.id === props.pagenow ? "purple" : "grey")};
`;
const MyPageBtn = styled(PersonOutlineOutlinedIcon)`
  font-size: 32px;
  color: ${(props: IProps) => (props.id === props.pagenow ? "purple" : "grey")};
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
  const [pageNow, setPageNow] = useState("");

  // 경로 바뀔때마다 pathname 저장해주기
  useEffect(() => {
    setPageNow(router.pathname);
  }, [router.pathname]);

  function onClickMove(event: any) {
    router.push(event.currentTarget.id);
  }

  return (
    <Wrapper>
      <FooterWrapper>
        <Button onClick={onClickMove} id="/posh/home">
          <IconWrapper>
            <HomeBtn id="/posh/home" pagenow={pageNow} />
          </IconWrapper>
          <ButtonLabel>홈</ButtonLabel>
        </Button>
        <Button onClick={onClickMove} id="/posh/search">
          <IconWrapper>
            <SearchBtn id="/posh/search" pagenow={pageNow} />
          </IconWrapper>
          <ButtonLabel>검색</ButtonLabel>
        </Button>
        <Button onClick={onClickMove} id="/posh/products/write">
          <IconWrapper>
            <WriteBtn id="/posh/products/write" pagenow={pageNow} />
          </IconWrapper>
          <ButtonLabel>등록</ButtonLabel>
        </Button>
        <Button onClick={onClickMove} id="/posh/user/chatList">
          <IconWrapper>
            <ChatBtn id="/posh/user/chatList" pagenow={pageNow} />
          </IconWrapper>
          <ButtonLabel>채팅</ButtonLabel>
        </Button>
        <Button onClick={onClickMove} id="/posh/user/mypage">
          <IconWrapper>
            <MyPageBtn id="/posh/user/mypage" pagenow={pageNow} />
          </IconWrapper>
          <ButtonLabel>MY</ButtonLabel>
        </Button>
      </FooterWrapper>
    </Wrapper>
  );
}

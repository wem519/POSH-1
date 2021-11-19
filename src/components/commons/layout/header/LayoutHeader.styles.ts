import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import PersonIcon from "@mui/icons-material/Person";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import MenuIcon from "@mui/icons-material/Menu";

export const Wrapper = styled.div`
  background-color: #8915a6;
  width: 100vw;
  position: fixed top;
  display: flex;
  justify-content: center;
  height: 100px;
  @media screen and (min-width: 600px) {
    height: 220px;
  }
`;
export const ContnesWrpper = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0px 0px 0px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const HeaderLogo = styled.div`
  /* padding: 44px 40px 11px 0px; */
  text-align: center;
  font-family: "NotoSansitalic";
  font-size: 50px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
`;
export const HeaderLogo2 = styled.div`
  padding: 44px 0px 11px 0px;
  text-align: center;
  font-family: "NotoSansitalic";
  font-size: 30px;
  font-weight: 500;
  color: #fff;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 75px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const Search = styled.input`
  width: 200px;
  height: 30px;
  background-color: #f3f3f3;
  border-radius: 4px 0px 0px 4px;
  border: none;
  font-family: "NotoSansKRregular";
  font-size: 14px;
  background-position: 320px;
  padding-left: 10px;
  ::placeholder {
    color: #8915a6;
    opacity: 30%;
    font-size: 14px;
  }
`;
export const SearchBnt = styled.div`
  width: 58px;
  height: 30px;
  border-radius: 0px 4px 4px 0px;
  background-color: #f3f3f3;
  background-image: url("/images/icon-search.png");
  background-repeat: no-repeat;
  background-position: 20px;
  cursor: pointer;
  z-index: 1;
`;

export const HomeBtn = styled(HomeIcon)`
  font-size: 28px;
  color: #fff;
`;
export const SearchBtn = styled(SearchIcon)`
  font-size: 28px;
  color: #fff;
`;
export const WriteBtn = styled(LocalParkingIcon)`
  font-size: 28px;
  color: #fff;
`;
export const ChatBtn = styled(ForumIcon)`
  font-size: 26px;
  color: #fff;
`;
export const MyPageBtn = styled(PersonIcon)`
  font-size: 32px;
  color: #fff;
`;
export const IconBox = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 7px;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const Profile = styled.img`
  object-fit: cover;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
// 카테고리 토글버튼 /////////////////////////////////////////////
export const CategoryBtn = styled(MenuIcon)<{ isOpen: boolean }>`
  font-size: 35px;
  color: ${(props) => (props.isOpen ? "#8915a6" : "#fff")};
  position: absolute;
  top: 49px;
  left: 10px;
  z-index: 1;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
export const Category = styled.div<{ isOpen: boolean }>`
  width: 300px;
  height: 100vh;
  background-color: #eee;
  z-index: 1;
  transition: all 0.35s;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? 0 : "-300px")};
  opacity: 95%;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
export const CategoryList = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 100px;
  left: ${(props) => (props.isOpen ? "100px" : "-300px")};
  transition: all 0.35s;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: hotpink; */
`;
export const CategoryName = styled.div`
  font-size: 35px;
  font-style: italic;
  color: #8915a6;
  font-weight: 500;
`;

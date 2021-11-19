import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import PersonIcon from "@mui/icons-material/Person";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

export const Wrapper = styled.div`
  background-color: #8915a6;
  width: 100vw;
  position: fixed top;
  display: flex;
  justify-content: center;
`;
export const ContnesWrpper = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: #222; */
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const HeaderLogo = styled.div`
  padding: 44px 40px 11px 0px;
  text-align: center;
  font-family: "NotoSansitalic";
  font-size: 30px;
  font-weight: 500;
  color: #fff;
`;
export const HeaderLogo2 = styled.div`
  padding: 44px 0px 11px 0px;
  text-align: center;
  font-family: "NotoSansitalic";
  font-size: 30px;
  font-weight: 500;
  color: #fff;
  @media screen and (min-width: 700px) {
    display: none;
  }
`;
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 44px;
  padding-bottom: 11px;
  margin-left: 75px;
  @media screen and (max-width: 700px) {
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
  /* margin-top: 22px; */
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
  padding-top: 44px;
  padding-bottom: 11px;
  margin: 0 7px;
  cursor: pointer;
`;
export const IconWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const ProfileBox = styled.div`
  width: 28px;
  height: 28px;
  padding-top: 44px;
  padding-bottom: 11px;
  margin: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background-color: #fff;
`
export const Profile = styled.img`
  object-fit: cover;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`

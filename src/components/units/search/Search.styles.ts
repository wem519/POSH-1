import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Search = styled.input`
  width: 320px;
  height: 42px;
  background-color: #f3f3f3;
  border-radius: 4px 0px 0px 4px;
  margin-top: 13px;
  padding-left: 12px;
  border: none;
  font-family: "NotoSansKRregular";
  font-size: 16px;

  background-position: 320px;
  ::placeholder {
    color: #8915a6;
    opacity: 30%;
  }
`;
export const SearchBnt = styled.div`
  width: 58px;
  height: 42px;
  margin-top: 13px;
  border-radius: 0px 4px 4px 0px;
  background-color: #f3f3f3;
  background-image: url("/images/icon-search.png");
  background-repeat: no-repeat;
  background-position: 20px;
  cursor: pointer;
`;
// map으로 불러오는 images css
export const BodyWrpper = styled.div`
  width: 390px;
  overflow: auto;
  margin-top: 13px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 70px;
`;
export const BodyBox = styled.div`
  width: 128px;
  height: 128px;
  background-color: #eee;
  border: none;
  margin: 1px 1px;
  cursor: pointer;
`;
export const ProductImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

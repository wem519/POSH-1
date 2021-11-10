import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TopWrapper = styled.div`
  width: 390px;
  height: 96px;
  text-align: center;
  background-color: #8915A6;
`
export const Logo = styled.img`
  margin-top: 44px;
`
export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Search = styled.input`
  width: 300px;
  height: 42px;
  background-color: #F3F3F3;
  border-radius: 4px 0px 0px 4px;
  margin-top: 13px;
  padding-left: 12px;
  border: none;
  font-family: "NotoSansKRregular";
  font-size: 16px;
  
  background-position: 320px ;
  ::placeholder {
    color: #8915A6;
    opacity: 30%;
  }
`
export const SearchBnt = styled.div`
  width: 58px;
  height: 42px;
  margin-top: 13px;
  border-radius: 0px 4px 4px 0px;
  background-color: #F3F3F3;
  background-image: url('/images/icon-search.png');
  background-repeat: no-repeat;
  background-position: 20px ;
  cursor: pointer;
`
// map으로 불러오는 images css
export const BodyWrpper = styled.div`
  width: 358px;
  margin-top: 13px;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
`
export const BodyBox = styled.div`
  width: 117px;
  height: 117px;
  background-color: #eee;
  border: none;
  margin: 1px 1px;
`
export const ProductImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
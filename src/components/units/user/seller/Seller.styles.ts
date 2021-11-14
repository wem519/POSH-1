import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ProfileWrapper = styled.div`
  width: 358px;
  height: 120px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ProfileNicname = styled.div`
  font-family: 'NotoSansKRmedium';
  font-size: 18px;
  margin-top: 13px;
`
export const ProfileImage = styled.img`
  width: 72px;
  height: 72px;
  background-color: #8915A6;
  border-radius: 100%;
  margin-top: 7px;
`
export const MenuWrapper = styled.div`
  display: flex;
  margin-top: 19px;
`
export const Menu = styled.div`
  width: 179px;
  height: 42px;
  border-radius: 4px 4px 0px 0px;
  background-color: #B69ACB;
  color: #fff;
  font-family: "NotoSansKRregular";
  font-size: 18px;
  text-align: center;
  line-height: 42px;
  border: 1px solid #fff;
`
export const BodyWrpper = styled.div`
  width: 358px;
  overflow: auto;
  margin-top: 13px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 70px;
`
export const BodyBox = styled.div`
  width: 117px;
  height: 117px;
  background-color: #F3F3F3;
  border: #fff solid 1px;
  cursor: pointer;
`
export const ProductImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

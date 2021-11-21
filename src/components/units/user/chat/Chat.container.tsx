import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 390px;
`;
const ChatListContents = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #b69acb;
`;
const Profile = styled.img`
  width: 50px;
  height: 50px;
`;
const ChatRight = styled.div`
  padding-left: 12px;
`;
const ChatInfo = styled.div``;
const Name = styled.span`
  font-weight: bold;
`;
const LastTime = styled.span`
  padding-left: 5px;
  font-size: 12px;
  color: #a5a5a5;
`;
const LastChat = styled.div``;

export default function ChatList() {
  return (
    <Wrapper>
      <ChatListContents>
        <Profile src="/images/logo.svg" />
        <ChatRight>
          <ChatInfo>
            <Name>도른자</Name>
            <LastTime>2021.11.10</LastTime>
          </ChatInfo>
          <LastChat>안녕하세요! 어떤 상품 보셨나요?</LastChat>
        </ChatRight>
      </ChatListContents>
    </Wrapper>
  );
}

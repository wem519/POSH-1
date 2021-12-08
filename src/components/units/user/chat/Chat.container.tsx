import styled from "@emotion/styled";
import { useState, useEffect, useRef } from "react";
import { getFirebaseConfig } from "../../../../../pages/_app";
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  collectionGroup,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { useRouter } from "next/router";

const MessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 390px;
  padding: 10px;
  border-bottom: 1px solid #959595;
`;
const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  object-fit: cover;
`;
const Contents = styled.div`
  width: 296px;
  padding-top: 3px;
`;
const LastTime = styled.span`
  font-size: 12px;
  color: gray;
`;
const Name = styled.div`
  font-weight: 500;
  font-size: 16px;
`;
const ChatWrapper = styled.div`
  margin-bottom: 50px;
  overflow: auto;
  height: 730px;
`;
const NameAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const firebaseAppConfig = getFirebaseConfig();

// initializeApp(firebaseAppConfig);
getApps().length === 0 ? initializeApp(firebaseAppConfig) : getApp();

export default function Chat() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);

  function loadMessages() {
    const recentMessagesQuery = query(
      // collection(getFirestore(), `6198ddb23095240029102447닭꼬치`),
      collectionGroup(getFirestore(), "닭꼬치"),
      orderBy("timestamp", "asc"),
      limit(100)
    );

    onSnapshot(recentMessagesQuery, function (snapshot) {
      // @ts-ignore
      setMessages(snapshot.docs.map((el) => el.data()));
    });
  }

  const msgRef = useRef<HTMLDivElement>();

  function scrollToBottom() {
    if (msgRef.current) {
      msgRef.current.scrollTop = msgRef.current.scrollHeight;
    }
  }

  function onClickToChatRoom() {
    router.push(`/posh/products/6198ddb23095240029102447/chat`);
  }

  useEffect(() => {
    loadMessages();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <ChatWrapper ref={msgRef}>
        {messages.map((el) => (
          <MessageWrapper key={el.id} onClick={onClickToChatRoom}>
            <ProfileImg src={el.profilePicUrl} />
            <div>
              <NameAndTime>
                <Name>{el.name}</Name>
                <LastTime>{el.id.slice(4, 15)}</LastTime>
              </NameAndTime>
              <Contents>{el.text}</Contents>
            </div>
          </MessageWrapper>
        ))}
      </ChatWrapper>
    </>
  );
}

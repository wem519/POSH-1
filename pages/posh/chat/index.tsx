import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { getFirebaseConfig } from "../../_app";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { useEffect } from "react";
import { useRef } from "react";

const FETCHUSERLOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      picture
      name
    }
  }
`;
const ChatInputWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
`;
const CommentsInputWrite = styled.input`
  width: 311px;
  height: 42px;
  background-color: #f3f3f3;
  border: none;
  padding-left: 12px;
  outline: none;
`;
const CommentsBnt = styled.div`
  width: 79px;
  height: 42px;
  background-color: #8915a6;
  font-family: "NotoSansKRregular";
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 42px;
  cursor: pointer;
`;
const GetMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 358px;
  margin-bottom: 10px;
  overflow: auto;
`;
const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: gray;
  object-fit: cover;
`;
const GetMessageBox = styled.div`
  width: 296px;
  border-radius: 10px;
  background-color: lightgray;
  padding: 10px 10px;
  margin-bottom: 7px;
`;
const MessageDate = styled.div`
  font-size: 12px;
  padding-left: 3px;
`;
const Name = styled.div`
  font-weight: 500;
`;
// const ImgUrl = styled.img``;
const ChatWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
`;

const firebaseAppConfig = getFirebaseConfig();
// TODO 0: Initialize Firebase
initializeApp(firebaseAppConfig);

// ///여기부터@!@@@@@@@
export default function Chat() {
  const [profileImg, setProfileImg] = useState("");
  const [userName, setUserName] = useState("");
  const [msgContents, setMsgContents] = useState("");
  // const [imgUrl, setImgUrl] = useState("");
  const [messages, setMessages] = useState([]);
  const [time, setTime] = useState("");

  const { data }: any = useQuery(FETCHUSERLOGGEDIN);
  const [message, setMessage] = useState("");
  // console.log(data);
  // 메세지 state
  const onChagemessage = (e: any) => {
    setMessage(e.target.value);
  };
  // console.log(message);
  const name = data?.fetchUserLoggedIn.name;
  const picture = data?.fetchUserLoggedIn.picture;
  async function saveMessage() {
    // Add a new message entry to the Firebase database.
    try {
      await addDoc(collection(getFirestore(), "messages3"), {
        name: name,
        text: message,
        profilePicUrl: picture,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error writing new message to Firebase Database", error);
    }
  }

  function loadMessages() {
    // Create the query to load the last 12 messages and listen for new ones.
    const recentMessagesQuery = query(
      collection(getFirestore(), "messages3"),
      orderBy("timestamp", "asc"),
      limit(100)
    );
    // Start listening to the query.
    onSnapshot(recentMessagesQuery, function (snapshot) {
      // snapshot.docChanges().forEach(function (change) {
      //   const message = change.doc.data();
      //   console.log("메세지", message);
      // @ts-ignore
      setMessages(snapshot.docs.map((el) => el.data()));
    });
    // });
  }

  const msgRef = useRef<HTMLDivElement>();

  function scrollToBottom() {
    if (msgRef.current) {
      msgRef.current.scrollTop = msgRef.current.scrollHeight;
    }
  }

  useEffect(() => {
    loadMessages();
    scrollToBottom();
  }, [messages]);
  console.log("렌더");
  // console.log("메세지", messages);

  return (
    <>
      <ChatWrapper ref={msgRef}>
        {messages.map((el) => (
          <GetMessageWrapper key={el}>
            <ProfileImg src={el.profilePicUrl} />
            <div>
              <Name>{el.name}</Name>
              <GetMessageBox>{el.text}</GetMessageBox>
              {/* <ImgUrl>{imgUrl}</ImgUrl> */}
              <MessageDate></MessageDate>
            </div>
          </GetMessageWrapper>
        ))}
      </ChatWrapper>
      <ChatInputWrapper>
        <CommentsInputWrite
          placeholder="메세지를 입력하세요"
          onChange={onChagemessage}
        />
        <CommentsBnt onClick={saveMessage}>보내기</CommentsBnt>
      </ChatInputWrapper>
    </>
  );
}

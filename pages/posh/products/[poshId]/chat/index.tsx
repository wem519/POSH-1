import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { getFirebaseConfig } from "../../../../_app";
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
  margin-bottom: 30px;
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
const ImgUrl = styled.img``;

const firebaseAppConfig = getFirebaseConfig();
// TODO 0: Initialize Firebase
initializeApp(firebaseAppConfig);

// ///여기부터@!@@@@@@@
export default function Chat() {
  const [profileImg, setProfileImg] = useState("");
  const [userName, setUserName] = useState("");
  const [msgContents, setMsgContents] = useState("");
  // const [imgUrl, setImgUrl] = useState("");

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
      orderBy("timestamp", "desc"),
      limit(12)
    );
    // Start listening to the query.
    onSnapshot(recentMessagesQuery, function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        const message = change.doc.data();
        displayMessage(
          change.doc.id,
          message.timestamp,
          message.name,
          message.text,
          message.profilePicUrl,
          message.imageUrl
        );
      });
    });
  }
  // // Displays a Message in the UI.
  function displayMessage(
    id: any,
    timestamp: any,
    name: any,
    text: any,
    picUrl: any,
    imageUrl: any
  ) {
    // profile picture
    if (picUrl) {
      setProfileImg(picUrl);
    }
    setUserName(name);
    if (text) {
      setMsgContents(text);
    }

    // var messageElement = div.querySelector(".message");
    // if (text) {
    //   // If the message is text.
    //   messageElement.textContent = text;
    //   // Replace all line breaks by <br>.
    //   messageElement.innerHTML = messageElement.innerHTML.replace(
    //     /\n/g,
    //     "<br>"
    //   );
    // } else if (imageUrl) {
    //   // If the message is an image.
    //   var image = document.createElement("img");
    //   image.addEventListener("load", function () {
    //     messageListElement.scrollTop = messageListElement.scrollHeight;
    //   });
    //   image.src = imageUrl + "&" + new Date().getTime();
    //   messageElement.innerHTML = "";
    //   messageElement.appendChild(image);
    // }

    // // Show the card fading-in and scroll to view the new message.

    // setTimeout(function () {
    //   // GetMessageWrapper.classList.add("visible");
    //   // console.log("ddd", GetMessageWrapper.classList);
    // }, 1);
    // messageListElement.scrollTop = messageListElement.scrollHeight;
    // messageInputElement.focus();
  }

  loadMessages();

  return (
    <>
      <GetMessageWrapper>
        <ProfileImg src={profileImg} />
        <div>
          <Name>{userName}</Name>
          <GetMessageBox>{msgContents}</GetMessageBox>
          {/* <ImgUrl>{imgUrl}</ImgUrl> */}
          <MessageDate></MessageDate>
        </div>
      </GetMessageWrapper>

      {/* <GetMessageWrapper>
        <div>
          <Name>{userName}</Name>
          <GetMessageBox>{msgContents}</GetMessageBox>
          <MessageDate>{timeStamp}</MessageDate>
        </div>
        <ProfileImg src={profileImg} />
      </GetMessageWrapper> */}
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

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../pages/_app";

export default function ChatList() {
  async function onClickSubmit() {
    const blog = collection(getFirestore(firebaseApp), "blog"); // blog 라는 컬렉션 만듦
    await addDoc(blog, {
      writer: "posh",
      title: "테스트",
      contents: "내용",
    }); // blog 라는 컬렉션에 문서(doc) 추가, 문서가 객체이므로 {}
  }

  async function onClickFetch() {
    const blog = collection(getFirestore(firebaseApp), "blog"); // 어떤 컬렉션에서 문서를 가져올건지
    const result = await getDocs(blog); // blog 컬렉션이 있는 문서들을 가져와서 result 에 담기
    const docs = result.docs.map((el) => el.data()); // docs 는 배열임. map으로 하나씩 (객체의)데이터를 꺼내서 docs에 저장
    console.log(docs);
  }

  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>불러오기</button>
    </>
  );
}

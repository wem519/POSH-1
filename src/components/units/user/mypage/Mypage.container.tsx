import MypageUI from "./Mypage.presenter";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Modal } from "antd";

const FETCH_USEDITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      images
      deletedAt
    }
  }
`;

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      images
      tags
      seller {
        _id
      }
    }
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      picture
    }
  }
`;
const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      email
      name
      picture
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function Mypage() {
  const fileRef = useRef<any>();
  const router = useRouter();
  const [updateUser] = useMutation(UPDATE_USER);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const [myPick, setMyPick] = useState(true);
  const [mySelling, setMySelling] = useState(false);
  const [mySoldOut, setMySoldOut] = useState(false);
  const [preImage, setPreimage] = useState("");
  const [url, setUrl] = useState("");

  const { data } = useQuery(FETCH_USEDITEMS_I_PICKED, {
    variables: { search: "" },
  });
  const { data: Items, fetchMore } = useQuery(FETCH_USED_ITEMS);

  const { data: UserInfo } = useQuery(FETCH_USER_LOGGED_IN);
  function onClickDetail(event: any) {
    router.push(`/posh/products/${event.currentTarget.id}`);
  }
  function onClickPick() {
    setMyPick(true);
    setMySelling(false);
    setMySoldOut(false);
  }

  function onClickSelling() {
    setMySelling(true);
    setMyPick(false);
    setMySoldOut(false);
  }

  function onChangeFile(event: any) {
    const file = event.target.files[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setPreimage(data.target?.result as string);
    };
    setUrl(file);
  }

  async function onClickUploadFile() {
    const result = await uploadFile({
      variables: {
        file: url,
      },
    });

    await updateUser({
      variables: {
        updateUserInput: {
          picture: `https://storage.googleapis.com/${result.data?.uploadFile.url} `,
        },
      },
    });
    Modal.success({ content: "프로필 사진이 수정되었습니다" });
    setPreimage("");
  }

  function onClickFile() {
    fileRef.current?.click();
  }

  function onClickSoldout() {
    setMySoldOut(true);
    setMyPick(false);
    setMySelling(false);
  }
  const loadMore = () => {
    if (!Items) return;
    fetchMore({
      variables: {
        page: Math.ceil(Items?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  function onClickLogOut() {
    logoutUser();
    localStorage.clear(); // 로컬 스토리지 내용 삭제
    // location.reload(); // 페이지 강제 새로고침
    router.push("/posh/home/");
    alert("로그아웃 완료");
  }

  return (
    <MypageUI
      data={data}
      userInfo={UserInfo}
      Items={Items}
      onClickDetail={onClickDetail}
      onClickPick={onClickPick}
      onClickSelling={onClickSelling}
      onClickSoldout={onClickSoldout}
      myPick={myPick}
      setMyPick={setMyPick}
      mySelling={mySelling}
      setMySelling={setMySelling}
      mySoldOut={mySoldOut}
      setMySoldOut={setMySoldOut}
      loadMore={loadMore}
      fileRef={fileRef}
      onChangeFile={onChangeFile}
      onClickFile={onClickFile}
      onClickUploadFile={onClickUploadFile}
      preImage={preImage}
      onClickLogOut={onClickLogOut}
    />
  );
}

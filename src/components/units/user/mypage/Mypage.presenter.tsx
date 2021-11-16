import {
  Body,
  Menu,
  MenuWrapper,
  ProductImg,
  ProductsList,
  ProductsWrapper,
  ProfileName,
  ProfilePicture,
  ProfileWrapper,
  Wrapper,
  FileInput,
  Edit,
  Arrow,
  EditWrapper,
  ArrowWrapper,
} from "./Mypage.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function MypageUI(props: any) {
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfilePicture
          src={props.preImage || props.userInfo?.fetchUserLoggedIn.picture}
          onClick={props.onClickUpdatePicture}
        />
        {!props.preImage ? (
          <div style={{ position: "relative" }}>
            <EditWrapper>
              <Edit onClick={props.onClickFile}></Edit>
            </EditWrapper>
          </div>
        ) : (
          <div style={{ position: "relative" }}>
            <ArrowWrapper>
              <Arrow onClick={props.onClickUploadFile}></Arrow>
            </ArrowWrapper>
          </div>
        )}
        <ProfileName>{props.userInfo?.fetchUserLoggedIn.name}</ProfileName>
        <FileInput
          type="file"
          ref={props.fileRef}
          onChange={props.onChangeFile}
        ></FileInput>
      </ProfileWrapper>
      <Body>
        <MenuWrapper>
          <Menu onClick={props.onClickPick}>Pick</Menu>
          <Menu onClick={props.onClickSelling}>Selling</Menu>
          <Menu onClick={props.onClickSoldout}>Sold out</Menu>
        </MenuWrapper>
        <InfiniteScroll pageStart={0} loadMore={props.loadMore} hasMore={true}>
          {props.myPick && (
            <ProductsWrapper>
              {props.data?.fetchUseditemsIPicked.map((el: any, index: any) => (
                <ProductsList
                  key={index}
                  id={el._id}
                  onClick={props.onClickDetail}
                >
                  <ProductImg
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                </ProductsList>
              ))}
            </ProductsWrapper>
          )}
          {props.mySelling && (
            <ProductsWrapper>
              {props.Items?.fetchUseditems
                .filter((el) => el.tags[0] === "판매중")
                .map(
                  (el: any, index: any) =>
                    el.seller._id === props.userInfo?.fetchUserLoggedIn._id && (
                      <ProductsList
                        key={index}
                        id={el._id}
                        onClick={props.onClickDetail}
                      >
                        <ProductImg
                          src={`https://storage.googleapis.com/${el.images[0]}`}
                        />
                      </ProductsList>
                    )
                )}
            </ProductsWrapper>
          )}
          {props.mySoldOut && (
            <ProductsWrapper>
              {props.Items?.fetchUseditems
                .filter((el) => el.tags[0] === "판매완료")
                .map(
                  (el: any, index: any) =>
                    el.seller._id === props.userInfo?.fetchUserLoggedIn._id && (
                      <ProductsList
                        key={index}
                        id={el._id}
                        onClick={props.onClickDetail}
                      >
                        <ProductImg
                          src={`https://storage.googleapis.com/${el.images[0]}`}
                        />
                      </ProductsList>
                    )
                )}
            </ProductsWrapper>
          )}
        </InfiniteScroll>
      </Body>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#f1f1f1",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="./home.png"></img>
          <div>홈</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="./search.png"></img>
          <div>검색</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="./circle.png"
            style={{ width: "20px", height: "20px" }}
          ></img>
          <div>등록</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="./chat.png"></img>
          <div>채팅</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="./mypage.png"></img>
          <div>마이마켓</div>
        </div>
      </div> */}
    </Wrapper>
  );
}

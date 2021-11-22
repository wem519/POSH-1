import {
  Body,
  Menu1,
  Menu2,
  Menu3,
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
  LogOut,
} from "./Mypage.styles";
import InfiniteScroll from "react-infinite-scroller";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";

export default function MypageUI(props: any) {
  return (
    <Wrapper>
      {props.IsOpen && <Modal></Modal>}
      <ProfileWrapper>
        {props.userInfo?.fetchUserLoggedIn ? (
          <ProfilePicture
            src={props.preImage || props.userInfo?.fetchUserLoggedIn.picture}
          />
        ) : (
          <></>
        )}

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
      {props.userInfo?.fetchUserLoggedIn ? (
        <div style={{ display: "flex" }}>
          <LogOut onClick={props.onClickLogOut} />
        </div>
      ) : (
        <></>
      )}

      <Body>
        <MenuWrapper>
          <Menu1 onClick={props.onClickPick} myPick={props.myPick}>
            Pick
          </Menu1>
          <Menu2 onClick={props.onClickSelling} mySelling={props.mySelling}>
            Selling
          </Menu2>
          <Menu3 onClick={props.onClickSoldout} mySoldOut={props.mySoldOut}>
            Sold out
          </Menu3>
        </MenuWrapper>
        {props.data && props.Items && (
          <InfiniteScroll
            pageStart={0}
            loadMore={props.loadMore}
            hasMore={true}
          >
            {props.myPick && (
              <ProductsWrapper>
                {props.data?.fetchUseditemsIPicked.map(
                  (el: any, index: any) =>
                    !el.deletedAt && (
                      <ProductsList
                        key={uuidv4()}
                        id={el._id}
                        onClick={props.onClickDetail}
                      >
                        <ProductImg
                          src={
                            el.images.filter((el: any) => el)[0]
                              ? `https://storage.googleapis.com/${
                                  el.images.filter((el: any) => el)[0]
                                }`
                              : "/images/noImage.png"
                          }
                        />
                      </ProductsList>
                    )
                )}
              </ProductsWrapper>
            )}
            {props.mySelling && (
              <ProductsWrapper>
                {props.Items?.fetchUseditems
                  .filter((el: any) => el.tags[0] === "판매중")
                  .map(
                    (el: any, index: any) =>
                      el.seller._id ===
                        props.userInfo?.fetchUserLoggedIn._id && (
                        <ProductsList
                          key={index}
                          id={el._id}
                          onClick={props.onClickDetail}
                        >
                          <ProductImg
                            src={
                              el.images.filter((el: any) => el)[0]
                                ? `https://storage.googleapis.com/${
                                    el.images.filter((el: any) => el)[0]
                                  }`
                                : "/images/noImage.png"
                            }
                          />
                        </ProductsList>
                      )
                  )}
              </ProductsWrapper>
            )}
            {props.mySoldOut && (
              <ProductsWrapper>
                {props.Items?.fetchUseditems
                  .filter((el: any) => el.tags[0] === "판매완료")
                  .map(
                    (el: any, index: any) =>
                      el.seller._id ===
                        props.userInfo?.fetchUserLoggedIn._id && (
                        <ProductsList
                          key={index}
                          id={el._id}
                          onClick={props.onClickDetail}
                        >
                          <ProductImg
                            src={
                              el.images.filter((el: any) => el)[0]
                                ? `https://storage.googleapis.com/${
                                    el.images.filter((el: any) => el)[0]
                                  }`
                                : "/images/noImage.png"
                            }
                          />
                        </ProductsList>
                      )
                  )}
              </ProductsWrapper>
            )}
          </InfiniteScroll>
        )}
      </Body>
    </Wrapper>
  );
}

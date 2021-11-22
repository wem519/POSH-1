import {
  Wrapper,
  TransactionInfo,
  SellerProfile,
  SellerInfo,
  SellerName,
  Transaction,
  TransactionLoca,
  TransactionWay,
  ProductImages,
  ProductImage,
  SaleStatus,
  ProductMiddle,
  Buttons,
  ButtonsBuyer,
  PickBtn,
  PickBtn2,
  SendBtn,
  ButtonsSeller,
  EditBtn,
  DeleteBtn,
  ProductInfo,
  ProductInfoName,
  ProductInfoPrice,
  ProductInfoDetail,
  ProductInfoCreatedAt,
  ProductBottom,
  Comments,
  CommentsCount,
  Comment,
  SliderDiv,
  ChangeStatus,
} from "./ProductDetail.styles";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";

export default function ProductDetailUI(props: any) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // 이거 true(default)하면 화살표영역때문에 왼쪽으로 밀림
  };
  function onClickImg(e: any) {
    window.open(e.target.src);
  }
  return (
    <Wrapper>
      {props.isOpen && (
        <Modal
          width="300px"
          visible={true}
          onOk={props.onClickDelete}
          onCancel={props.onClickClose}
        >
          삭제하시겠습니까?
        </Modal>
      )}
      <TransactionInfo>
        <SellerProfile
          onClick={props.onClickProfile}
          src={props.data?.fetchUseditem.seller.picture}
        />
        <SellerInfo>
          <SellerName>{props.data?.fetchUseditem.seller.name}</SellerName>
          <Transaction>
            <TransactionLoca>
              {props.data?.fetchUseditem.useditemAddress?.address}
            </TransactionLoca>
            <TransactionWay>{props.data?.fetchUseditem.remarks}</TransactionWay>
          </Transaction>
        </SellerInfo>
      </TransactionInfo>
      <ProductImages>
        <SliderDiv {...settings}>
          {props.data?.fetchUseditem.images
            .filter((el: any) => el)
            .map((el: any) => (
              <ProductImage
                key={uuidv4()}
                src={`https://storage.googleapis.com/${el}`}
                onClick={onClickImg}
              />
            ))}
        </SliderDiv>
      </ProductImages>
      <ProductMiddle>
        {props.userInfo?.fetchUserLoggedIn._id ===
          props.data?.fetchUseditem.seller._id &&
          props.data?.fetchUseditem.tags[0] === "판매중" && (
            <ChangeStatus onChange={props.onChangeStatus}>
              <option value="판매중" selected>
                판매중
              </option>
              <option value="판매완료">판매완료</option>
            </ChangeStatus>
          )}
        {props.userInfo?.fetchUserLoggedIn._id ===
          props.data?.fetchUseditem.seller._id &&
          props.data?.fetchUseditem.tags[0] === "판매완료" && ( // prettier-ignore
            <ChangeStatus onChange={props.onChangeStatus}>
              <option value="판매중">판매중</option>
              <option value="판매완료" selected>
                판매완료
              </option>
            </ChangeStatus>
          )}
        {props.userInfo?.fetchUserLoggedIn._id !==
          props.data?.fetchUseditem.seller._id && (
          <SaleStatus>{props.data?.fetchUseditem.tags[0]}</SaleStatus>
        )}
        <Buttons>
          {props.userInfo?.fetchUserLoggedIn._id ===
          props.data?.fetchUseditem.seller._id ? (
            <ButtonsSeller>
              <EditBtn onClick={props.onClickToEdit}></EditBtn>
              <DeleteBtn onClick={props.onClickToDelete}></DeleteBtn>
            </ButtonsSeller>
          ) : (
            <ButtonsBuyer>
              {props.picked ? (
                <PickBtn2 onClick={props.onClickPick}></PickBtn2>
              ) : (
                <PickBtn onClick={props.onClickPick}></PickBtn>
              )}
              {props.data?.fetchUseditem.pickedCount}
              <SendBtn></SendBtn>
            </ButtonsBuyer>
          )}
        </Buttons>
      </ProductMiddle>
      <ProductBottom>
        <ProductInfo>
          <ProductInfoName>{props.data?.fetchUseditem.name}</ProductInfoName>
          <ProductInfoPrice>
            {props.data?.fetchUseditem.price.toLocaleString()} ₩
          </ProductInfoPrice>
          <ProductInfoDetail>
            {props.data?.fetchUseditem.contents}
          </ProductInfoDetail>
          <ProductInfoCreatedAt>
            {props.data?.fetchUseditem.createdAt.slice(0, 10)}
          </ProductInfoCreatedAt>
        </ProductInfo>
        <Comments>
          <CommentsCount onClick={props.onClickToCommentPage}>
            댓글 {props.questions?.fetchUseditemQuestions.length}개
          </CommentsCount>
          {props.questions?.fetchUseditemQuestions[0] && (
            <Comment>
              <b>{props.questions?.fetchUseditemQuestions[0].user.name}</b>
              &nbsp;
              {props.questions?.fetchUseditemQuestions[0].contents}
            </Comment>
          )}
        </Comments>
      </ProductBottom>
    </Wrapper>
  );
}

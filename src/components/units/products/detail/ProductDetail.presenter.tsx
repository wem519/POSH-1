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
} from "./ProductDetail.styles";

export default function ProductDetailUI(props: any) {
  return (
    <Wrapper>
      <TransactionInfo>
        <SellerProfile src={props.data?.fetchUseditem.seller.picture} />
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
        <ProductImage
          src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
        />
      </ProductImages>
      <ProductMiddle>
        <SaleStatus>
          <div>{props.data?.fetchUseditem.tags}</div>
        </SaleStatus>
        <Buttons>
          {props.userInfo?.fetchUserLoggedIn._id ===
          props.data?.fetchUseditem.seller._id ? (
            <ButtonsSeller>
              <EditBtn></EditBtn>
              <DeleteBtn></DeleteBtn>
            </ButtonsSeller>
          ) : (
            <ButtonsBuyer>
              <PickBtn></PickBtn>
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

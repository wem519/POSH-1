import { gql, useQuery } from "@apollo/client";
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

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      images
      price
      name
      contents
      remarks
      _id
      seller {
        _id
        name
        picture
      }
      createdAt
    }
  }
`;

const FETCH_USEDITEM_QEUSTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      user {
        name
      }
      contents
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
    }
  }
`;

export default function ProductDetail() {
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: "618b5ff7330ed0002955ec3f",
    },
  });

  const { data: questions } = useQuery(FETCH_USEDITEM_QEUSTIONS, {
    variables: {
      useditemId: "618b5ff7330ed0002955ec3f",
    },
  });

  const { data: userInfo } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <Wrapper>
      <TransactionInfo>
        <SellerProfile src={data?.fetchUseditem.seller.picture} />
        <SellerInfo>
          <SellerName>{data?.fetchUseditem.seller.name}</SellerName>
          <Transaction>
            <TransactionLoca>서울시 구로구</TransactionLoca>
            <TransactionWay>{data?.fetchUseditem.remarks}</TransactionWay>
          </Transaction>
        </SellerInfo>
      </TransactionInfo>
      <ProductImages>
        <ProductImage src={data?.fetchUseditem.images[0]} />
      </ProductImages>
      <Buttons>
        {userInfo?.fetchUserLoggedIn._id === data?.fetchUseditem.seller._id ? (
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
      <ProductBottom>
        <ProductInfo>
          <ProductInfoName>{data?.fetchUseditem.name}</ProductInfoName>
          <ProductInfoPrice>
            {data?.fetchUseditem.price.toLocaleString()} ₩
          </ProductInfoPrice>
          <ProductInfoDetail>{data?.fetchUseditem.contents}</ProductInfoDetail>
          <ProductInfoCreatedAt>
            {data?.fetchUseditem.createdAt.slice(0, 10)}
          </ProductInfoCreatedAt>
        </ProductInfo>
        <Comments>
          <CommentsCount>
            댓글 {questions?.fetchUseditemQuestions.length}개
          </CommentsCount>
          <Comment>
            <b>{questions?.fetchUseditemQuestions[0].user.name}</b>&nbsp;
            {questions?.fetchUseditemQuestions[0].contents}
          </Comment>
        </Comments>
      </ProductBottom>
    </Wrapper>
  );
}

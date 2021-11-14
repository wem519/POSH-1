import { gql } from "@apollo/client";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      images
      price
      name
      contents
      remarks
      tags
      _id
      seller {
        _id
        name
        picture
      }
      createdAt
      useditemAddress {
        address
      }
      pickedCount
    }
  }
`;

export const FETCH_USEDITEM_QEUSTIONS = gql`
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

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
    }
  }
`;

export const DELETE_USEDITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export const TOGGLE_USEDITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

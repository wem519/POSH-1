import { gql } from "@apollo/client";

export const FETCH_USEDITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page:Int,$useditemId:ID!){
    fetchUseditemQuestions(page:$page,useditemId:$useditemId){
      _id
      contents
      createdAt
      user {
        _id
        picture
        name
        createdAt
        updatedAt
      }
    }
  }
`
export const DELETE_USEDITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId:ID!){
    deleteUseditemQuestion(useditemQuestionId:$useditemQuestionId)
  }
`
export const UPDATE_USEDITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput:UpdateUseditemQuestionInput!,
    $useditemQuestionId:ID!){
    updateUseditemQuestion(
      updateUseditemQuestionInput:$updateUseditemQuestionInput,
      useditemQuestionId:$useditemQuestionId){
      contents
      updatedAt
      user{
        _id
        picture
      }
    }
  }
`
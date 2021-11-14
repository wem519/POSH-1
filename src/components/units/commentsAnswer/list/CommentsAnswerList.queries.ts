import { gql } from "@apollo/client";

export const FETCH_USEDITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page:Int,$useditemQuestionId:ID!){
    fetchUseditemQuestionAnswers(page:$page,useditemQuestionId:$useditemQuestionId){
      _id
      contents
      user{
        name
        picture
      }
      createdAt
    }
  }
`
export const DELET_USEDITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId:ID!){
    deleteUseditemQuestionAnswer(useditemQuestionAnswerId:$useditemQuestionAnswerId)
  }
`
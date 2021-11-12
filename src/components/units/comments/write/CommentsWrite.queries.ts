import { gql } from "@apollo/client";

export const CREATE_USEDITEM_QUESTION = gql`
  mutation createUseditemQuestion($useditemId:ID!,$createUseditemQuestionInput:CreateUseditemQuestionInput!){
    createUseditemQuestion(useditemId:$useditemId,createUseditemQuestionInput:$createUseditemQuestionInput){
      _id
      user {
        name
      }
    }
  }
`
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
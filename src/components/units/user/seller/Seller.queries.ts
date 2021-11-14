import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId:ID!){
    fetchUseditem(useditemId:$useditemId){
      seller{
        _id
        name
        picture
      }
    }
  }
`
export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page:Int){
    fetchUseditems(page:$page){
      _id
      images
      tags
      seller {
        _id
        picture
      }
    }
  }
`
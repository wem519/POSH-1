import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($search: String, $page: Int) {
    fetchUseditems(search: $search, page: $page) {
      name
      images
      _id
      tags
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductWrapper = styled.div`
  width: 1400px;
  overflow: auto;
  margin-top: 13px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 70px;
  @media screen and (max-width: 1400px) {
    width: 1050px;
  }
  @media screen and (max-width: 700px) {
    width: 390px;
  }
`;
const ProductItem = styled.div`
  width: 348px;
  height: 348px;
  background-color: #eee;
  border: none;
  margin: 1px 1px;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    width: 128px;
    height: 128px;
  }
`;
const ProductImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default function CategoryPage() {
  const router = useRouter();

  const onClickDetail = (e: any) => {
    router.push(`/posh/products/${e.currentTarget.id}`);
  };

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  const lodeMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <Wrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={lodeMore}
        hasMore={true}
        useWindow={true}
      >
        <div>{router.query.category}</div>
        <ProductWrapper>
          {data?.fetchUseditems
            .filter((el: any) => el.tags[1] === router.query.category)
            .map((el: any, index: any) => (
              <ProductItem key={index} id={el._id} onClick={onClickDetail}>
                <ProductImg
                  src={
                    el.images.filter((el: any) => el)[0]
                      ? `https://storage.googleapis.com/${
                          el.images.filter((el: any) => el)[0]
                        }`
                      : "/images/noImage.png"
                  }
                />
              </ProductItem>
            ))}
        </ProductWrapper>
      </InfiniteScroll>
    </Wrapper>
  );
}

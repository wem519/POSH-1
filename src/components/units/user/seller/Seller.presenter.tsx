import {
  Wrapper,
  ProfileWrapper,
  ProfileImage,
  ProfileNicname,
  Menu,
  MenuWrapper,
  BodyWrpper,
  BodyBox,
  ProductImg,
} from "./Seller.styles";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";

export default function SellerUI(props) {
  const router = useRouter();
  const onClickDetail = (e) => {
    router.push(`/posh/products/${e.currentTarget.id}`);
  };

  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImage src={props.data?.fetchUseditem?.seller.picture} />
        <ProfileNicname>
          {props.data?.fetchUseditem?.seller.name}
        </ProfileNicname>
      </ProfileWrapper>
      <MenuWrapper>
        <Menu onClick={props.onClickIsSelling}>Selling</Menu>
        <Menu onClick={props.onClickIsSoldOut}>Sould out</Menu>
      </MenuWrapper>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.lodeMore}
        hasMore={true}
        useWindow={true}
      >
        {props.isSoldOut ? (
          <BodyWrpper>
            {props.items?.fetchUseditems
              .filter((el) => el.tags[0] === "판매완료")
              .map(
                (el: any, index: any) =>
                  el.seller._id === props.data?.fetchUseditem?.seller._id && (
                    <BodyBox key={index} id={el._id} onClick={onClickDetail}>
                      <ProductImg
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                      />
                    </BodyBox>
                  )
              )}
          </BodyWrpper>
        ) : (
          <BodyWrpper>
            {props.items?.fetchUseditems
              .filter((el) => el.tags[0] === "판매중")
              .map(
                (el: any, index: any) =>
                  el.seller._id === props.data?.fetchUseditem?.seller._id && (
                    <BodyBox key={index} id={el._id} onClick={onClickDetail}>
                      <ProductImg
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                      />
                    </BodyBox>
                  )
              )}
          </BodyWrpper>
        )}
      </InfiniteScroll>
    </Wrapper>
  );
}

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
  Menu2,
} from "./Seller.styles";
import InfiniteScroll from "react-infinite-scroller";
import { useRouter } from "next/router";

export default function SellerUI(props: any) {
  const router = useRouter();
  const onClickDetail = (e: any) => {
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
        <Menu onClick={props.onClickIsSelling} isSoldOut={props.isSoldOut}>
          Selling
        </Menu>
        <Menu2 onClick={props.onClickIsSoldOut} isSoldOut={props.isSoldOut}>
          Sould out
        </Menu2>
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
              .filter((el: any) => el.tags[0] === "판매완료")
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
              .filter((el: any) => el.tags[0] === "판매중")
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

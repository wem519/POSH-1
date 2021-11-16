import { gql, useQuery } from "@apollo/client"
import styled from '@emotion/styled'
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 13px;
`;
const PictureBox = styled.div`
  width: 70px;
  height: 70px;
  margin: 0px 10px;
  border: 3px solid transparent;
  border-radius: 50px;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, #ffefe1bd, #ffcdf3aa, #5d1d8caa);
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Picture = styled.img`
  object-fit: cover;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  /* background-color: gray; */
`
const ProfileWrpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FETCH_USEDITEMS_OF_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest{
      _id
      pickedCount
      seller{
        picture
        name
        _id
      }
    }
  }
`;

export default function BestItem() {
  const router = useRouter()

  const { data } = useQuery(FETCH_USEDITEMS_OF_BEST);
  console.log(data?.fetchUseditemsOfTheBest._id);

  const onClickMoveSeller = (e) =>
    router.push(`/posh/products/${e.currentTarget.id}/seller`);
  
  // console.log(new Set(data?.fetchUseditemsOfTheBest.map((el)=>(el?.seller.name))))

  // const Seller = [...new Set(
  //   data?.fetchUseditemsOfTheBest.map((el) => el.seller)
  // )]
  //   console.log(Seller)
  return (
    <Wrapper>
      {data?.fetchUseditemsOfTheBest.map((el) => (
        <ProfileWrpper>
          <PictureBox onClick={onClickMoveSeller} id={el._id}>
            <Picture src={el.seller.picture} />
          </PictureBox>
          <div style={{ fontSize: "small" }}>{el.seller.name}</div>
        </ProfileWrpper>
      ))}
    </Wrapper>
  );
}
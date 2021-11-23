import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

// const Wrapper = styled.div`
//   display: flex;
//   margin-top: 40px;
//   margin-bottom: 50px;
//   @media screen and (max-width: 600px) {
//     display: none;
//   }
// `;
// const PictureBox = styled.div`
//   width: 1050px;
//   height: 300px;
//   /* padding: 10px; */
//   margin: 0 auto;
//   border: 3px solid transparent;
//   background-color: #fff;
//   cursor: pointer;
//   /* padding: 10px; */
// `;
// const SliderBest = styled(Slider)`
//   .slick-track .slick-center {
//     -webkit-transform: scale(1.5, 1.75);
//     -moz-transform: scale(1.5, 1.75);
//     transform: scale(1.5, 1.7);
//   }
//   .slick-track {
//     display: flex;
//   }
//   .slick-track .slick-slide {
//     /* display: flex; */
//     width: 300px;
//     height: 300px;
//     padding: 20px;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const Picture = styled.img`
//   width: 300px;
//   height: 300px;
//   object-fit: cover;
// `;
// const ProfileWrpper = styled.div`
//   /* display: flex;
//   flex-direction: column;
//   align-items: center; */
// `;
const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 13px;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
const PictureBox2 = styled.div`
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
const Picture2 = styled.img`
  object-fit: cover;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  /* background-color: gray; */
`;
const ProfileWrpper2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FETCH_USEDITEMS_OF_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      pickedCount
      images
      seller {
        picture
        name
        _id
      }
    }
  }
`;

export default function BestItem() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   speed: 3000,
  //   autoplaySpeed: 3000,
  //   slidesToShow: 3,
  //   adaptiveHeight: true,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: "20px",
  //   focusOnSelect: true,
  //   // fade: true,
  //   arrows: true, // 이거 true(default)하면 화살표영역때문에 왼쪽으로 밀림
  // };

  const { data } = useQuery(FETCH_USEDITEMS_OF_BEST);
  const router = useRouter();
  const onClickMoveSeller = (e: any) =>
    router.push(`/posh/products/${e.currentTarget.id}/seller`);

  return (
    <>
      {/* <Wrapper>
      <ProfileWrpper>
        <PictureBox>
          <SliderBest {...settings}>
            {data?.fetchUseditemsOfTheBest.map((el: any) => (
              <Picture
                key={uuidv4()}
                src={
                  el.images.filter((el: any) => el)[0]
                    ? `https://storage.googleapis.com/${
                        el.images.filter((el: any) => el)[0]
                      }`
                    : "/images/noImage.png"
                }
              />
            ))}
          </SliderBest>
        </PictureBox>
      </ProfileWrpper>
    </Wrapper> */}
      <Wrapper2>
        {data?.fetchUseditemsOfTheBest.map((el: any) => (
          <ProfileWrpper2 key={uuidv4()}>
            <PictureBox2 onClick={onClickMoveSeller} id={el._id}>
              <Picture2 src={el.seller.picture} />
            </PictureBox2>
            <div style={{ fontSize: "small" }}>{el.seller.name}</div>
          </ProfileWrpper2>
        ))}
      </Wrapper2>
    </>
  );
}

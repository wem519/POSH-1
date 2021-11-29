import styled from "@emotion/styled";
import { useRouter } from "next/router";

const LendingImg = styled.img`
  @media screen and (max-width: 600px) {
    display: none;
    position: relative;
  }
`;
const LendingImgSmall = styled.img`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export default function LandingPage() {
  const router = useRouter();
  const onClickMoveHome = () => {
    router.push("/posh/home");
  };

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#8915a6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LendingImg
          style={{ width: "85vw" }}
          src="/images/lending.png"
          onClick={onClickMoveHome}
        />
        <LendingImgSmall
          style={{ width: "100vw" }}
          src="/images/lending2.png"
          onClick={onClickMoveHome}
        />
      </div>
    </>
  );
}

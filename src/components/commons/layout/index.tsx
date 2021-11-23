import LayoutFooterM from "./footer_mobile/LayoutFooterMobile";
import LayoutHeader from "./header/LayoutHeader";
import LayoutFooterPC from "./footer_pc/LayoutFooterPC";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Body = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 600px) {
    min-height: 1200px;
  }
`;

const HiddenHeader = ["/posh/accounts/login", "/posh/accounts/signup", "/"];
const HiddenFooter = [
  "/posh/accounts/login",
  "/posh/accounts/signup",
  "/posh/products/[poshId]/comment",
  "/",
];
const HiddeonFooterPC = [
  "/posh/user/chat",
  "/posh/accounts/login",
  "/posh/accounts/signup",
];

export default function Layout(props: any) {
  const router = useRouter();
  const isHiddenHeader = HiddenHeader.includes(router.pathname);
  const isHiddenFooter = HiddenFooter.includes(router.pathname);
  const isHiddenFooterPC = HiddeonFooterPC.includes(router.pathname);

  return (
    <Wrapper>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenFooter && <LayoutFooterM />}
      <Body>{props.children}</Body>
      {!isHiddenFooterPC && <LayoutFooterPC />}
    </Wrapper>
  );
}

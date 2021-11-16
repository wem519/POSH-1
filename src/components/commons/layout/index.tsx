import LayoutFooterM from "./footer_mobile/LayoutFooterMobile";
import LayoutHeader from "./header/LayoutHeader";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const HiddenHeader = ["/posh/accounts/login", "/posh/accounts/signup"];
const HiddenFooter = [
  "/posh/accounts/login",
  "/posh/accounts/signup",
  "/posh/products/[poshId]/comment",
];

export default function Layout(props: any) {
  const router = useRouter();
  const isHiddenHeader = HiddenHeader.includes(router.pathname);
  const isHiddenFooter = HiddenFooter.includes(router.pathname);

  return (
    <Wrapper>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenFooter && <LayoutFooterM />}
      <Body>{props.children}</Body>
    </Wrapper>
  );
}

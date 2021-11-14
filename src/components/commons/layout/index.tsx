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
  height: 770px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hidden = ["/posh/accounts/login", "/posh/accounts/signup"];

export default function Layout(props: any) {
  const router = useRouter();
  const isHidden = Hidden.includes(router.pathname);

  return (
    <Wrapper>
      {!isHidden && <LayoutHeader />}
      {!isHidden && <LayoutFooterM />}
      <Body>{props.children}</Body>
    </Wrapper>
  );
}

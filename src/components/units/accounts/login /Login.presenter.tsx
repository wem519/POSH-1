import {
  TitleWrapper,
  Wrapper,
  Title,
  AccountWrapper,
  Account,
  AccountInfo,
  Error,
  ButtonWrapper,
  Login,
} from "./Login.styles";

export default function LoginUI(props: any) {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Title>POSH</Title>
        </TitleWrapper>
        <AccountWrapper>
          <Account>
            <AccountInfo
              placeholder="email ID"
              type="text"
              onChange={props.onChangeEmail}
            />
            <Error>{props.emailError}</Error>
          </Account>
          <Account>
            <AccountInfo
              placeholder="Password"
              type="password"
              onChange={props.onChangePassword}
            />
            <Error>{props.passwordError}</Error>
          </Account>
          <ButtonWrapper>
            <Login onClick={props.onClickLogin}>로그인</Login>
          </ButtonWrapper>
        </AccountWrapper>
      </Wrapper>
    </>
  );
}

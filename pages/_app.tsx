import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import "antd/dist/antd.css";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://34.64.161.16/team04",
    headers: {
      authorization: `Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThiNDliZDMzMGVkMDAwMjk1NWVjMzEiLCJwZXJtaXNzaW9uIjowLCJpYXQiOjE2MzY1MTgzNTIsImV4cCI6MTYzNjUyMTk1Miwic3ViIjoiYWNjZXNzVG9rZW4ifQ.5NGBHuPSTc3HZNe-lEdOvLLOTC5acFI4WXxslotyvbKcjQRPWVcBwcqqB7w_jl5fcuDZC8rFgrmzenPSw4BMCg`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Global styles={globalStyles} />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;

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
import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");

  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") || "";
    setAccessToken(accessToken);
  });

  const uploadLink = createUploadLink({
    uri: "http://34.64.161.16/team04",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;

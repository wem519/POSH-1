// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../src/commons/getAccessToken";
import "antd/dist/antd.css";
import { createUploadLink } from "apollo-upload-client";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import { createContext, useState, useEffect } from "react";
import Layout from "../src/components/commons/layout";

const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyD2U2DKuB3Zd8KfhmAhKscoTYZi4qpT48o",
  authDomain: "chat-test-43b4a.firebaseapp.com",
  projectId: "chat-test-43b4a",
  storageBucket: "chat-test-43b4a.appspot.com",
  messagingSenderId: "453567476389",
  appId: "1:453567476389:web:9a42daa361ac10b9e3134c",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app’s configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}

export const GlobalContext = createContext(null);
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [search, setSearch] = useState("");
  const value: any = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
    search: search,
    setSearch: setSearch,
  };
  // ---------------accessToken 등록-------------------

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken") || "";
  //   setAccessToken(accessToken);
  // }, []);

  // ---------------accessToken 등록-------------------

  // ---------------refreshToken -------------------
  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });

          return forward(operation);
        }
      }
    }
  });
  // ---------------refreshToken -------------------

  const uploadLink = createUploadLink({
    uri: "https://backend03-team.codebootcamp.co.kr/team04",
    headers: { authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      <GlobalContext.Provider value={value}>
        <Global styles={globalStyles} />
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;

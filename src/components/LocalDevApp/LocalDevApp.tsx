import React, { useEffect, useState } from "react";
import { createBrowserHistory } from "history";

import Button from "@wedgekit/button";
import { Agility } from "@wedgekit/illustrations";
import Input, { Password } from "@wedgekit/input";
import Layout from "@wedgekit/layout";

import App from "../../App";
import { ForceSessionData } from "../../@types/force";
import { ableToRecoverValidSession, createNewSession } from "./utils";

import PageWrapper from "./styles/PageWrapper";
import LoginDiv from "./styles/LoginDiv";
import StyledLayout from "./styles/StyledLayout";
import LogoWrapper from "./styles/LogoWrapper";
import ButtonWrapper from "./styles/ButtonWrapper";

const LocalDevApp = () => {
  const history = createBrowserHistory();
  const [session, setSession] = useState<ForceSessionData>();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    const initializeLocalApp = async () => {
      if (ableToRecoverValidSession(setSession)) return;
      const {
        VITE_USERNAME: USERNAME,
        VITE_ORGID: ORGID,
        VITE_PASSWORD: PASSWORD,
      } = import.meta.env;
      await createNewSession(setSession, `${USERNAME}.${ORGID}`, PASSWORD);
    };

    initializeLocalApp().catch(console.error);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const initializeLocalApp = async () => {
      await createNewSession(setSession, username, password);
    };
    setInvalid(false);
    setSubmitting(true);
    initializeLocalApp()
      .catch(() => setInvalid(true))
      .finally(() => setSubmitting(false));
  };

  return session ? (
    <App sessionData={session} history={history} />
  ) : (
    <PageWrapper>
      <LoginDiv>
        <form onSubmit={handleSubmit}>
          <StyledLayout
            areas={[
              "logo logo",
              "username username",
              "password password",
              "login login",
            ]}
            columns={[1]}
          >
            <Layout.Section area="logo">
              <LogoWrapper>
                <Agility />
              </LogoWrapper>
            </Layout.Section>
            <Layout.Section area="username">
              <Input
                id="username"
                label="Username"
                placeholder="Enter Username"
                value={username}
                onChange={setUsername}
                invalid={invalid}
              />
            </Layout.Section>
            <Layout.Section area="password">
              <Password
                id="password"
                label="Password"
                value={password}
                onChange={setPassword}
                invalid={invalid}
              />
            </Layout.Section>
            <Layout.Section area="login">
              <ButtonWrapper>
                <Button
                  domain="primary"
                  type="submit"
                  className="wk-button-primary"
                  submitting={submitting}
                >
                  Log In
                </Button>
              </ButtonWrapper>
            </Layout.Section>
          </StyledLayout>
        </form>
      </LoginDiv>
    </PageWrapper>
  );
};

export default LocalDevApp;

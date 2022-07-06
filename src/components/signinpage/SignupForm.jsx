import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common";
import { Marginer } from "./Marginer";
import { AccountContext } from "./AccountContext";
import axios from "axios";
import config from "../config";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitBtn = () => {
    axios
      .post(`${config.URL}/api/register`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Full Name"
          name="name"
          onChange={handleChange}
          value={data.name}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={data.email}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={data.password}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={submitBtn}>
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

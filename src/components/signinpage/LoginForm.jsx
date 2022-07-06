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
import { useNavigate } from "react-router-dom";
import Dasboard from "../dashboard/Dasboard";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [suc, setSuc] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    axios
      .post(`${config.URL}/api/login`, data)
      .then((res) => {
        console.log(res.data);
        setSuc(res.data.success);
      })
      .catch((err) => {
        console.log(err);
      });
    if (suc === true) {
      navigate("/dashboard");
    }
  };
  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={data.email}
          name="email"
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={data.password}
          name="password"
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={handleClick}>
        Signin
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

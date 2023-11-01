'use client';
import { useState } from 'react';
import Link from 'next/link'
import styled from 'styled-components';
export default function Register() {
  const [email, setEmail] = useState("");

  let handleEmailChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }









  return (
    <RegisterPage>
      <RegisterLogo src='/registerIcon.png' alt="logo" />
      <Header>Welcome, glad to have you!</Header>
      <div className="form-container">
        <RegisterForm >
          <InputStyler
            type="email"
            placeholder="Enter your email"
            required
            onChange={handleEmailChange}
          />
          <InputStyler
            type="username"
            placeholder="Enter your preferred username"
            required
          />
          <InputStyler
            type="password"
            required
            placeholder="Enter your password"
          />
          <InputStyler
            type="password"
            required
            placeholder="Confirm your password"
          />
          <ButtonContainer>
            <RegisterButton type="submit">Register</RegisterButton>
          </ButtonContainer>
        </RegisterForm>
        {/* {errorMessage && <p className="errorMessage">{errorMessage}</p>} */}
      </div>
      <Link href='/'>
        <BackButton>Back</BackButton>
      </Link>
    </RegisterPage>
  );
};


const RegisterPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RegisterLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 10px;
`;

const RegisterButton = styled.button`
  box-sizing: border-box;
  width: 311px;
  height: 44.91px;
  border-radius: 10px;
  border: 1px solid #e9ecff;
  padding: 10px, 40px, 10px, 40px;
  gap: 10px;
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
  color: white;
  letter-spacing: 0em;
  background: #a8a6a5;
  cursor: pointer;
  &:hover {
    background: #323333;
  }
`;

const Header = styled.h1`
  width: 311px;
  height: 33px;
  top: 9375px;
  left: -8372px;
  opacity: 40%;
  font-family: "Lato";
  font-weight: 400;
  font-size: 24px;
  line-height: 16.8px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 25px;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputStyler = styled.input`
  box-sizing: border-box;
  width: 311px;
  height: 44.91px;
  top: 9431px;
  left: -8372px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #323333;
  margin-bottom: 10px;
  font-family: "Exo", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 23.92px;
  padding-left: 15px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
`;
const BackButton = styled.button`
  margin-top: 25px;
  background: none;
  border: none;
  font-family: Lato;
  cursor: pointer;
  cursor: pointer;
  font-size: medium;
  font-weight: heavy;
  color: #a6a6a6;
`;

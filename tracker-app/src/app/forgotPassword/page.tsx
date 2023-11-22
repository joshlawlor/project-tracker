'use client';
import styled from 'styled-components';
import Link from 'next/link';

export default function ForgotPassword() {
    return (
        <ForgotPasswordWrapper>
            <ForgotIcon src='/forgotPassword.png' alt="logo" />
            <Header>Forgot your Password?</Header>
            <SubHeader>
                Enter your email address and we will send you password reset
                instructions
            </SubHeader>

            <FormStyler>
                <InputStyler
                    type="email"
                    placeholder="Enter your email"
                    required
                />
                <ButtonStyler>Continue</ButtonStyler>
            </FormStyler>
            {/* {errorMessage && <p className="errorMessage">{errorMessage}</p>} */}
            <Link href='/login'>

                <BackButton>Back</BackButton>
            </Link>

        </ForgotPasswordWrapper>
    );
};


const ForgotPasswordWrapper = styled.div`
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `;

const ForgotIcon = styled.img`
`;

const Header = styled.h2`
      margin-top: 16px;
    `;

const SubHeader = styled.h1`
      width: 311px;
      height: 33px;
      top: 9375px;
      left: -8372px;
      opacity: 40%;
      font-family: "Lato";
      font-weight: 400;
      font-size: 14px;
      line-height: 16.8px;
      text-align: center;
      margin-bottom: 16px;
    `;

const FormStyler = styled.form`
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
      margin-bottom: 25px;
      font-family: "Exo", sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 23.92px;
      padding-left: 15px;
    `;
const ButtonStyler = styled.button`
    color: white;
      box-sizing: border-box;
      width: 311px;
      height: 44.91px;
      border-radius: 10px;
      border: 1px solid #e9ecff;
      padding: 10px, 40px, 10px, 40px;
      gap: 10px;
      font-family: "Exo", sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 27px;
      letter-spacing: 0em;
      cursor: pointer;
      background: #a8a6a5;
      &:hover {
        background: #323333;
      }
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

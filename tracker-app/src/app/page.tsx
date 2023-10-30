'use client';
import { GlobalStyles } from './styles/GlobalStyles';
import Link from 'next/link'
import styled from 'styled-components';
export default function Landing() {
 

  return (
    <LandingWrapper>
      <GlobalStyles />
      <Logo src='/communityIcon.png' alt="logo" />
      <Header >Welcome! </Header>
      <ButtonsWrapper>

        <Link href='/login'>
          <LoginButton >
            <LoginIcon src='/teamworkIcon.gif' alt="talenticon" />
            <div>
              <ButtonTitle>Log in</ButtonTitle>
              <H3>Start collaborating!</H3>
            </div>
          </LoginButton>
        </Link>

      <Link href='/register'>
        <RegisterButton>
          <RegisterIcon src='/registerIcon.gif' alt="talenticon" />
          <div>
            <ButtonTitle>Register</ButtonTitle>
            <H3>Join our community!</H3>
          </div>
        </RegisterButton>
        </Link>
      </ButtonsWrapper>
      <GoogleWrapper>
        <GoogleButton>
          <GoogleIcon src='/googleIcon.png' alt="googleIcon" />
          <div>
            <GoogleTitle >Sign in with Google.</GoogleTitle>
          </div>
        </GoogleButton>
      </GoogleWrapper>
    </LandingWrapper>
  )
}


const LandingWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #323333;
  color: white;
`;

const Logo = styled.img``;

const Header = styled.h1`
  width: 1000px;
  height: 35.03px;
  top: 8833.28px;
  left: -10137px;
  font-size: 35px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  padding: 15px;
  text-align: center;
  color: #ffffff
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 670px;
  margin-top: 20px;
`;
const RegisterButton = styled.button`
cursor: pointer;
width: 325px;
height: 207.26px;
top: 8895.03px;
left: -9982px;
border-radius: 20px;
border: 1px solid #ffeae8;
box-shadow: 0px 4px 16px 0px rgba(243, 179, 171, 0.15);
padding: 0;
background: linear-gradient(0deg, #ffffff, #ffffff),
  linear-gradient(0deg, #ffeae8, #ffeae8);
background-origin: border-box;
background-clip: content-box, border-box;
&:hover {
  background: #E1E5E5;
}
`;
const LoginIcon = styled.img`
  margin-left: 42.5%;
  margin-bottom: .5%;
`;
const LoginButton = styled.button`
  cursor: pointer;
  width: 325px;
  height: 207.26px;
  top: 8895.03px;
  left: -9982px;
  border-radius: 20px;
  border: 1px solid #ffeae8;
  box-shadow: 0px 4px 16px 0px rgba(243, 179, 171, 0.15);
  padding: 0;
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffeae8, #ffeae8);
  background-origin: border-box;
  background-clip: content-box, border-box;
  &:hover {
    background: #E1E5E5;
  }
`;
const RegisterIcon = styled.img`
margin-left: 42%;
`;
const ButtonTitle = styled.h1`
  width: 120px
  height: 24.92px;
  top: 8995.83px;
  left: -9860px;
  weight: 700;
  size: 18px;
  line-height: 21.6px;
  font-family:'lato';
  color: black;
`;
const H3 = styled.h3`
  width: 187px
  height: 32.84px;
  top: 9029.81px;
  left: -9893px;
  font-family:'lato';
  weight: 500;
  size: 14px;
  line-height: 29px;
  color: black;
`;

const GoogleWrapper = styled.div`
  margin-top: 50px;
`;

const GoogleIcon = styled.img`
  max-height: 50px;
`;

const GoogleTitle = styled.h3`
margin-left: 10px;
width: 187px
height: 32.84px;
top: 9029.81px;
left: -9893px;
font-family:'lato';
weight: 500;
size: 14px;
line-height: 29px;
color: black;
`;

const GoogleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 225px;
  height: 107.26px;
  top: 8895.03px;
  left: -9982px;
  border-radius: 20px;
  border: 1px solid #ffeae8;
  cursor: pointer;
  box-shadow: 0px 4px 16px 0px rgba(243, 179, 171, 0.15);
  padding: 0;
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(0deg, #ffeae8, #ffeae8);
  background-origin: border-box;
  background-clip: content-box, border-box;
  &:hover {
    background: #E1E5E5;
  }
`;

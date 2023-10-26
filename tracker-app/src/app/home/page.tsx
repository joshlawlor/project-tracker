'use client';
import StyledComponentsRegistry from '../registry' // Import the StyledComponentsRegistry component
import styled from 'styled-components';

export default function page() {
  return (
    <HomeWrapper>Home Page</HomeWrapper>
  )
}


const HomeWrapper = styled.div`
    height: 100vh;

`
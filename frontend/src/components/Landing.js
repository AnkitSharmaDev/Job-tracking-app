import React from "react";
import styled from "styled-components";
import { FaRocket, FaUserFriends } from "react-icons/fa";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;
const Headline = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 18px;
  text-align: center;
  letter-spacing: -1px;
`;
const Sub = styled.p`
  font-size: 1.25rem;
  color: #c7d0e0;
  margin-bottom: 36px;
  text-align: center;
`;
const CTA = styled.a`
  background: #007bff;
  color: #fff;
  padding: 16px 38px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(0,123,255,0.12);
  transition: background 0.2s, transform 0.2s;
  margin-top: 18px;
  &:hover {
    background: #0056b3;
    transform: translateY(-2px) scale(1.04);
  }
`;
const Illustration = styled.div`
  font-size: 5.5rem;
  margin-bottom: 18px;
  color: #5a3fc0;
`;
const PeopleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 48px;
`;
const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #23284a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 700;
  border: 2px solid #007bff;
`;

function Landing() {
  return (
    <Wrapper>
      <Hero>
        <Illustration><FaRocket /></Illustration>
        <Headline>Track Your Job Applications Like a Pro</Headline>
        <Sub>JobTrackr helps you organize, visualize, and win your job search.<br />
        Join hundreds of happy users and land your dream job faster.</Sub>
        <CTA href="/login">Get Started</CTA>
      </Hero>
      <PeopleRow>
        <Avatar>AJ</Avatar>
        <Avatar>SK</Avatar>
        <Avatar>👩‍💻</Avatar>
        <Avatar>🧑‍💼</Avatar>
        <Avatar>MR</Avatar>
        <span style={{ color: '#c7d0e0', fontSize: '1.1rem', marginLeft: 10 }}><FaUserFriends style={{marginRight: 6}}/>+200 using JobTrackr</span>
      </PeopleRow>
    </Wrapper>
  );
}

export default Landing; 
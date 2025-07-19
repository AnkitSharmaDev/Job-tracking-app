import React from "react";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

const PeopleSection = styled.div`
  margin: 38px 0 0 0;
  padding: 32px 0 0 0;
  border-top: 1.5px solid #23284a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.div`
  color: #c7d0e0;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 12px;
`;
const Avatars = styled.div`
  display: flex;
  gap: 18px;
`;
const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #23284a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #fff;
  font-weight: 700;
  border: 2px solid #007bff;
`;

function People() {
  return (
    <PeopleSection>
      <Title>People using JobTrackr</Title>
      <Avatars>
        <Avatar><FaUserCircle /></Avatar>
        <Avatar>SK</Avatar>
        <Avatar>👨‍💻</Avatar>
        <Avatar>🧑‍💼</Avatar>
        <Avatar>MR</Avatar>
        <Avatar>👩‍💻</Avatar>
        <Avatar>AJ</Avatar>
      </Avatars>
    </PeopleSection>
  );
}

export default People; 
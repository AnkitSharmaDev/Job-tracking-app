import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";

const ProfileContainer = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(24,28,47,0.10);
  padding: 48px 48px 40px 48px;
  max-width: 420px;
  margin: 60px auto 0 auto;
  text-align: center;
`;

const UserIcon = styled.div`
  font-size: 2.8rem;
  color: #5a3fc0;
  margin-bottom: 18px;
`;

const Username = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #181c2f;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const LogoutBtn = styled.button`
  background: #dc3545;
  color: #fff;
  border: none;
  padding: 14px 38px;
  border-radius: 8px;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 18px;
  transition: background 0.2s;
  &:hover {
    background: #b52a37;
  }
`;

function Profile({ username, onLogout }) {
  return (
    <ProfileContainer>
      <UserIcon><FaUser /></UserIcon>
      <Username>{username}</Username>
      <LogoutBtn onClick={onLogout}>Logout</LogoutBtn>
    </ProfileContainer>
  );
}

export default Profile; 
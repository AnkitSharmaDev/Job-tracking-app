import React from "react";
import styled from "styled-components";

const TopbarContainer = styled.div`
  height: 60px;
  background: #181c2f;
  border-bottom: 1.5px solid #23284a;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px;
  box-shadow: 0 2px 12px rgba(24,28,47,0.10);
`;

const UserText = styled.span`
  font-weight: 600;
  color: #e9eefd;
  font-size: 1.08rem;
`;

function Topbar({ username }) {
  return (
    <TopbarContainer>
      <UserText>👤 {username}</UserText>
    </TopbarContainer>
  );
}

export default Topbar; 
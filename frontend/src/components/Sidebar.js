import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 220px;
  background: #181c2f;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
`;

const NavItem = styled.div`
  padding: 18px 30px;
  cursor: pointer;
  font-size: 1.1rem;
  &:hover {
    background: #23284a;
  }
`;

function Sidebar({ onNav, active }) {
  return (
    <SidebarContainer>
      <h2 style={{ textAlign: "center", marginBottom: 40, fontWeight: 700 }}>JobTrackr</h2>
      <NavItem onClick={() => onNav("dashboard")}
        style={{ background: active === "dashboard" ? "#23284a" : "" }}>
        Dashboard
      </NavItem>
      <NavItem onClick={() => onNav("profile")}
        style={{ background: active === "profile" ? "#23284a" : "" }}>
        Profile
      </NavItem>
      <NavItem onClick={() => onNav("logout")}>Logout</NavItem>
    </SidebarContainer>
  );
}

export default Sidebar; 
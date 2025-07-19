import React from "react";
import styled from "styled-components";
import { FaBriefcase, FaPaperPlane, FaComments, FaGift, FaTimesCircle } from "react-icons/fa";

const CardsRow = styled.div`
  display: flex;
  gap: 32px;
  margin: 48px 0 40px 0;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 1;
  min-width: 180px;
  background: rgba(36, 40, 65, 0.85);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(24,28,47,0.18);
  padding: 38px 0 28px 0;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  border: 1.5px solid rgba(80, 120, 255, 0.12);
  backdrop-filter: blur(6px);
  &:hover {
    box-shadow: 0 12px 40px rgba(80,120,255,0.18);
    transform: translateY(-2px) scale(1.04);
  }
`;

const Stat = styled.div`
  font-size: 2.7rem;
  font-weight: 700;
  color: #fff;
  margin-top: 16px;
  text-shadow: 0 2px 12px #007bff44;
`;

const Label = styled.div`
  font-size: 1.13rem;
  color: #c7d0e0;
  margin-top: 14px;
`;

const IconWrap = styled.div`
  font-size: 2.3rem;
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: #5a8fff;
  opacity: 0.95;
  filter: drop-shadow(0 2px 8px #007bff55);
`;

function StatsCards({ stats }) {
  return (
    <CardsRow>
      <Card>
        <IconWrap><FaBriefcase /></IconWrap>
        <Stat>{stats.total}</Stat>
        <Label>Total Jobs</Label>
      </Card>
      <Card>
        <IconWrap><FaPaperPlane /></IconWrap>
        <Stat>{stats.applied}</Stat>
        <Label>Applied</Label>
      </Card>
      <Card>
        <IconWrap><FaComments /></IconWrap>
        <Stat>{stats.interview}</Stat>
        <Label>Interviews</Label>
      </Card>
      <Card>
        <IconWrap><FaGift /></IconWrap>
        <Stat>{stats.offer}</Stat>
        <Label>Offers</Label>
      </Card>
      <Card>
        <IconWrap><FaTimesCircle /></IconWrap>
        <Stat>{stats.rejected}</Stat>
        <Label>Rejected</Label>
      </Card>
    </CardsRow>
  );
}

export default StatsCards; 
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TimelineContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(24,28,47,0.07);
  padding: 28px 36px;
  margin-top: 30px;
`;
const TimelineTitle = styled.h3`
  color: #181c2f;
  margin-bottom: 18px;
`;
const TimelineList = styled.ul`
  list-style: none;
  padding: 0;
`;
const TimelineItem = styled.li`
  margin: 12px 0;
  padding: 12px 18px;
  background: #f5f6fa;
  border-radius: 6px;
  font-size: 1.05rem;
  color: #23284a;
`;

function JobTimeline({ token, selectedJob }) {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    if (selectedJob) {
      setTimeline(selectedJob.statusHistory);
    } else {
      setTimeline([]);
    }
  }, [selectedJob]);

  if (!selectedJob) return null;

  return (
    <TimelineContainer>
      <TimelineTitle>Status Timeline for {selectedJob.company}</TimelineTitle>
      <TimelineList>
        {timeline.map((item, idx) => (
          <TimelineItem key={idx}>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)} - {new Date(item.date).toLocaleString()}
          </TimelineItem>
        ))}
      </TimelineList>
    </TimelineContainer>
  );
}

export default JobTimeline; 
import React from "react";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";

const TableWrapper = styled.div`
  background: rgba(30, 34, 54, 0.85);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(24,28,47,0.18);
  overflow-x: auto;
  margin-bottom: 32px;
  border: 1.5px solid rgba(80, 120, 255, 0.12);
  backdrop-filter: blur(6px);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  min-width: 600px;
`;

const Th = styled.th`
  background: rgba(36, 40, 65, 0.95);
  color: #e9eefd;
  font-weight: 700;
  padding: 20px 16px;
  text-align: left;
  font-size: 1.08rem;
  letter-spacing: 0.01em;
`;

const Td = styled.td`
  padding: 18px 16px;
  border-bottom: 1px solid rgba(80, 120, 255, 0.08);
  background: ${props => props.zebra ? "rgba(36, 40, 65, 0.92)" : "rgba(30, 34, 54, 0.92)"};
  color: #f5f6fa;
  font-size: 1.05rem;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ActionBtn = styled.button`
  padding: 6px 14px;
  border-radius: 7px;
  border: none;
  background: linear-gradient(120deg, #5a8fff 40%, #007bff 100%);
  color: #fff;
  cursor: pointer;
  font-size: 0.97rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0,123,255,0.10);
  transition: background 0.18s, box-shadow 0.18s, transform 0.18s;
  outline: none;
  &:hover {
    background: linear-gradient(120deg, #007bff 40%, #5a8fff 100%);
    box-shadow: 0 4px 16px rgba(0,123,255,0.18);
    transform: translateY(-2px) scale(1.04);
  }
  &:active {
    transform: scale(0.98);
  }
`;
const DeleteBtn = styled(ActionBtn)`
  background: linear-gradient(120deg, #dc3545 40%, #b52a37 100%);
  &:hover {
    background: linear-gradient(120deg, #b52a37 40%, #dc3545 100%);
    box-shadow: 0 4px 16px #dc354555;
  }
`;

function JobTable({ jobs, onEdit, onDelete }) {
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <Th>Company</Th>
            <Th>Role</Th>
            <Th>Status</Th>
            <Th>Last Update</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, idx) => (
            <tr key={job._id}>
              <Td zebra={idx % 2 === 1}>{job.company}</Td>
              <Td zebra={idx % 2 === 1}>{job.role}</Td>
              <Td zebra={idx % 2 === 1}>{job.status.charAt(0).toUpperCase() + job.status.slice(1)}</Td>
              <Td zebra={idx % 2 === 1}>{new Date(job.statusHistory[job.statusHistory.length-1].date).toLocaleString()}</Td>
              <Td zebra={idx % 2 === 1}>
                <ButtonRow>
                  <ActionBtn onClick={() => onEdit(job)}><FaEdit /> Edit</ActionBtn>
                  <DeleteBtn onClick={() => onDelete(job._id)}><FaTrash /> Delete</DeleteBtn>
                </ButtonRow>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}

export default JobTable; 
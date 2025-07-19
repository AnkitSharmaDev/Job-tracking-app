import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(24,28,47,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const Modal = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(24,28,47,0.18);
  padding: 32px 36px;
  min-width: 340px;
`;
const FormTitle = styled.h2`
  margin-bottom: 18px;
  color: #181c2f;
`;
const Input = styled.input`
  width: 100%;
  margin-bottom: 16px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;
const Select = styled.select`
  width: 100%;
  margin-bottom: 16px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;
const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
const Button = styled.button`
  padding: 10px 22px;
  border-radius: 6px;
  border: none;
  background: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  &:hover { background: #0056b3; }
`;
const CancelBtn = styled(Button)`
  background: #dc3545;
  &:hover { background: #b52a37; }
`;

const statusOptions = ["applied", "interview", "offer", "rejected"];

function JobForm({ token, selectedJob, setSelectedJob, onClose, onJobSaved }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("applied");

  useEffect(() => {
    if (selectedJob) {
      setCompany(selectedJob.company);
      setRole(selectedJob.role);
      setStatus(selectedJob.status);
    } else {
      setCompany("");
      setRole("");
      setStatus("applied");
    }
  }, [selectedJob]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobData = { company, role, status };
    if (selectedJob) {
      await axios.put(
        `http://localhost:5000/api/jobs/${selectedJob._id}`,
        jobData,
        { headers: { "x-auth-token": token } }
      );
    } else {
      await axios.post("http://localhost:5000/api/jobs", jobData, {
        headers: { "x-auth-token": token },
      });
    }
    setSelectedJob(null);
    onJobSaved();
    onClose();
  };

  if (!onClose) return null; // Only show as modal

  return (
    <Overlay>
      <Modal>
        <FormTitle>{selectedJob ? "Edit Job" : "Add Job"}</FormTitle>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <Input
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <Select value={status} onChange={(e) => setStatus(e.target.value)}>
            {statusOptions.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </Select>
          <ButtonRow>
            <Button type="submit">{selectedJob ? "Update" : "Add"} Job</Button>
            <CancelBtn type="button" onClick={onClose}>Cancel</CancelBtn>
          </ButtonRow>
        </form>
      </Modal>
    </Overlay>
  );
}

export default JobForm; 
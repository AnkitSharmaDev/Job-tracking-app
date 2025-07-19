import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatsCards from "./components/StatsCards";
import JobTable from "./components/JobTable";
import JobForm from "./components/JobForm";
import JobTimeline from "./components/JobTimeline";
import Profile from "./components/Profile";
import LoginRegister from "./components/LoginRegister";
import Landing from "./components/Landing";
import People from "./components/People";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  body {
    font-family: 'Inter', 'Roboto', Arial, sans-serif;
    background: #181c2f;
    margin: 0;
    padding: 0;
    color: #f5f6fa;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;

const BlobsBg = styled.div`
  position: fixed;
  z-index: 0;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  svg {
    position: absolute;
    filter: blur(32px) brightness(1.1);
    opacity: 0.45;
    animation: moveBlobs 32s ease-in-out infinite alternate;
  }
  @keyframes moveBlobs {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-30px) scale(1.08); }
    100% { transform: translateY(0) scale(1); }
  }
`;

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  position: relative;
  z-index: 1;
`;
const Main = styled.div`
  flex: 1;
  background: transparent;
`;
const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0 60px 0;
  position: relative;
  z-index: 2;
`;
const Hero = styled.div`
  margin-bottom: 32px;
`;
const Greeting = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 18px;
  margin-top: 0;
  letter-spacing: -1px;
`;
const StatsRow = styled.div`
  margin-bottom: 0;
`;
const MainArea = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 24px;
  }
`;
const LeftCol = styled.div`
  flex: 2.5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Card = styled.div`
  background: rgba(36, 40, 65, 0.85);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(24,28,47,0.18);
  padding: 24px 24px 18px 24px;
  margin-bottom: 0;
`;
const CenteredCard = styled(Card)`
  max-width: 1200px;
  width: 100%;
  margin-left: 40px;
  margin-right: 40px;
  align-self: center;
`;
const RightCol = styled.div`
  flex: 1.2;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const SearchBar = styled.input`
  width: 100%;
  padding: 14px 18px;
  border-radius: 12px;
  border: none;
  background: rgba(36, 40, 65, 0.85);
  color: #e9eefd;
  font-size: 1.1rem;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(24,28,47,0.10);
  outline: none;
  transition: background 0.2s, box-shadow 0.2s;
  &:focus {
    background: rgba(80, 120, 255, 0.12);
    box-shadow: 0 4px 24px #5a3fc055;
  }
`;
const TipCard = styled(Card)`
  color: #e9eefd;
  font-size: 1.13rem;
  border-left: 4px solid #5a8fff;
  margin-bottom: 0;
`;
const FloatingAddBtn = styled.button`
  position: fixed;
  right: 48px;
  bottom: 48px;
  z-index: 10;
  background: linear-gradient(120deg, #5a3fc0 40%, #007bff 100%);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  font-size: 2.2rem;
  box-shadow: 0 8px 32px #007bff55;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
  &:hover {
    background: linear-gradient(120deg, #007bff 40%, #5a3fc0 100%);
    box-shadow: 0 12px 40px #5a3fc055;
    transform: scale(1.08);
  }
`;

const tips = [
  "Tip: Use tags to organize your job applications!",
  "Stay positive! Every rejection is a step closer to your dream job.",
  "Update your job status regularly to track your progress.",
  "Try filtering jobs by status or company for quick access.",
  "Remember to take breaks and celebrate small wins!"
];

const BottomSection = styled.div`
  max-width: 1200px;
  margin: 48px auto 0 auto;
  padding: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [username, setUsername] = useState("");
  const [activePage, setActivePage] = useState("dashboard");
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showJobForm, setShowJobForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [tip, setTip] = useState(tips[Math.floor(Math.random() * tips.length)]);

  useEffect(() => {
    if (token) {
      setUsername("User");
    }
  }, [token]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/jobs", {
        headers: { "x-auth-token": token },
      });
      setJobs(res.data);
    } catch (e) {
      setJobs([]);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (token && activePage === "dashboard") fetchJobs();
  }, [token, activePage]);

  const stats = {
    total: jobs.length,
    applied: jobs.filter(j => j.status === "applied").length,
    interview: jobs.filter(j => j.status === "interview").length,
    offer: jobs.filter(j => j.status === "offer").length,
    rejected: jobs.filter(j => j.status === "rejected").length,
  };

  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    setActivePage("dashboard");
  };
  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    setActivePage("dashboard");
  };
  const handleNav = (page) => {
    if (page === "logout") handleLogout();
    else setActivePage(page);
  };
  const handleEditJob = (job) => {
    setSelectedJob(job);
    setShowJobForm(true);
  };
  const handleDeleteJob = async (id) => {
    await axios.delete(`http://localhost:5000/api/jobs/${id}`, {
      headers: { "x-auth-token": token },
    });
    fetchJobs();
  };
  const handleAddJob = () => {
    setSelectedJob(null);
    setShowJobForm(true);
  };
  const handleJobSaved = () => {
    fetchJobs();
  };

  // Filter jobs by search
  const filteredJobs = jobs.filter(job =>
    job.company.toLowerCase().includes(search.toLowerCase()) ||
    job.role.toLowerCase().includes(search.toLowerCase()) ||
    job.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Router>
      <GlobalStyle />
      <BlobsBg>
        <svg width="900" height="900" style={{top: '-200px', left: '-200px'}}><ellipse cx="450" cy="450" rx="350" ry="350" fill="#5a3fc0" /></svg>
        <svg width="700" height="700" style={{top: '60vh', left: '-100px'}}><ellipse cx="350" cy="350" rx="250" ry="250" fill="#007bff" /></svg>
        <svg width="600" height="600" style={{top: '40vh', left: '60vw'}}><ellipse cx="300" cy="300" rx="200" ry="200" fill="#5a8fff" /></svg>
      </BlobsBg>
      <Layout>
        {token && <Sidebar onNav={handleNav} active={activePage} />}
        <Main>
          {token && <Topbar username={username} />}
          <Content>
            <Routes>
              <Route
                path="/login"
                element={
                  token ? <Navigate to="/" /> : <LoginRegister onLogin={handleLogin} />
                }
              />
              <Route
                path="/"
                element={
                  token ? (
                    activePage === "profile" ? (
                      <Profile username={username} onLogout={handleLogout} />
                    ) : (
                      <>
                        <Hero>
                          <Greeting>Welcome back, {username}!</Greeting>
                          <StatsRow><StatsCards stats={stats} /></StatsRow>
                        </Hero>
                        <MainArea>
                          <LeftCol>
                            <CenteredCard>
                              <SearchBar
                                placeholder="Search jobs by company, role, or status..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                              />
                              {loading ? (
                                <div>Loading jobs...</div>
                              ) : (
                                <JobTable jobs={filteredJobs} onEdit={handleEditJob} onDelete={handleDeleteJob} />
                              )}
                            </CenteredCard>
                          </LeftCol>
                          <RightCol>
                            {selectedJob && <Card><JobTimeline token={token} selectedJob={selectedJob} /></Card>}
                          </RightCol>
                        </MainArea>
                        <BottomSection>
                          <TipCard>{tip}</TipCard>
                          <Card><People /></Card>
                        </BottomSection>
                        {showJobForm && (
                          <JobForm
                            token={token}
                            selectedJob={selectedJob}
                            setSelectedJob={setSelectedJob}
                            onClose={() => setShowJobForm(false)}
                            onJobSaved={handleJobSaved}
                          />
                        )}
                        <FloatingAddBtn onClick={handleAddJob} title="Add Job">+</FloatingAddBtn>
                      </>
                    )
                  ) : (
                    <Landing />
                  )
                }
              />
            </Routes>
          </Content>
        </Main>
      </Layout>
    </Router>
  );
}

export default App;

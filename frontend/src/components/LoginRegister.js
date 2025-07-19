import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f7f7;
`;

const Card = styled.div`
  background: #fff;
  padding: 40px 36px 32px 36px;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(24,28,47,0.10);
  min-width: 340px;
  max-width: 90vw;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 28px;
  color: #181c2f;
  font-size: 2rem;
  font-weight: 700;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 18px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 1rem;
  background: #f5f6fa;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #007bff;
    outline: none;
    background: #fff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #007bff;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background 0.2s;
  &:hover {
    background: #0056b3;
  }
`;

const Switch = styled.button`
  background: none;
  border: none;
  color: #007bff;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 8px;
  text-align: center;
  width: 100%;
  &:hover {
    text-decoration: underline;
  }
`;

const Error = styled.div`
  color: #dc3545;
  margin-top: 10px;
  text-align: center;
`;

function LoginRegister({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Error");
      onLogin(data.token);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Wrapper>
      <Card>
        <Title>{isLogin ? "Login" : "Register"}</Title>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">{isLogin ? "Login" : "Register"}</Button>
        </form>
        <Switch onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Need an account? Register" : "Already have an account? Login"}
        </Switch>
        {error && <Error>{error}</Error>}
      </Card>
    </Wrapper>
  );
}

export default LoginRegister; 
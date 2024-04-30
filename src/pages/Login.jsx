import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Input, VStack, useToast } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("https://mnwefvnykbgyhbdzpleh.supabase.co/auth/v1/token?grant_type=password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ud2Vmdm55a2JneWhiZHpwbGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNzQ3MzQsImV4cCI6MjAyODg1MDczNH0.tnHysd1LqayzpQ1L-PImcvlkUmkNvocpMS7tS-hYZNg",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.access_token) {
      localStorage.setItem("auth_token", data.access_token);
      navigate("/");
    } else {
      toast({
        title: "Login Failed",
        description: data.error_description || "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button colorScheme="blue" onClick={handleLogin}>
        Log In
      </Button>
    </VStack>
  );
};

export default Login;

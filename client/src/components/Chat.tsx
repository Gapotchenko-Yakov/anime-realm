import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  Typography,
} from "@mui/material";

const Chat = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const newSocket = io("http://localhost:5173");
    setSocket(newSocket);

    newSocket.on("message", (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (socket && input.trim()) {
      socket.emit("message", input);
      setMessages((prevMessages) => [...prevMessages, `You: ${input}`]);
      setInput("");
    }
  };

  return (
    <Box sx={{ width: 300, p: 2, border: "1px solid grey", borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Chat Room
      </Typography>
      <List sx={{ maxHeight: 200, overflowY: "auto" }}>
        {messages.map((message, index) => (
          <ListItem key={index}>{message}</ListItem>
        ))}
      </List>
      <TextField
        fullWidth
        label="Type a message"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSendMessage();
        }}
        sx={{ my: 1 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        fullWidth
      >
        Send
      </Button>
    </Box>
  );
};

export default Chat;

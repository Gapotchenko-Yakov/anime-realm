import React, { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  Typography,
  Card,
  CardContent,
  CardActions,
  useTheme,
} from "@mui/material";

const Chat = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const { palette } = useTheme();

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
    <Card
      sx={{
        width: 300,
        p: 2,
        borderRadius: 2,
        bgcolor: palette.background.alt,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: palette.secondary[200] }}
        >
          Chat Room
        </Typography>
        <List
          sx={{
            maxHeight: 200,
            overflowY: "auto",
            color: palette.secondary.main,
          }}
        >
          {messages.map((message, index) => (
            <ListItem key={index}>{message}</ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ flexDirection: "column", alignItems: "center" }}>
        <TextField
          fullWidth
          label="Type a message"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
          sx={{ my: 1, color: palette.secondary[200] }}
        />
        <Button
          variant="contained"
          onClick={handleSendMessage}
          fullWidth
          sx={{ color: palette.secondary[200] }}
        >
          Send
        </Button>
      </CardActions>
    </Card>
  );
};

export default Chat;

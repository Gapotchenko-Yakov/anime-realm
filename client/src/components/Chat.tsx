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
  Stack,
} from "@mui/material";

interface Message {
  id: string;
  author: string;
  text: string;
  date: Date;
}

const Chat = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const { palette } = useTheme();

  useEffect(() => {
    const newSocket = io("http://localhost:5173");
    setSocket(newSocket);

    newSocket.on("message", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (socket && input.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(), // TODO: unique ID
        author: "Yakov",
        text: input,
        date: new Date(),
      };
      socket.emit("message", input);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
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
            height: "60vh",
            overflowY: "auto",
            color: palette.secondary.main,
          }}
        >
          {messages.map((message) => (
            <ListItem
              key={message.id}
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: palette.secondary[300], fontWeight: 600 }}
              >
                {message.author}:
              </Typography>
              <Typography
                variant="body1"
                sx={{ textWrap: "wrap", wordBreak: "break-word" }}
              >
                {message.text}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {new Date(message.date).toLocaleTimeString()}
              </Typography>
            </ListItem>
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

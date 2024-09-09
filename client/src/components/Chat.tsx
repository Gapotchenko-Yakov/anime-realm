import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

// const socketUrl =
// import.meta.env.VITE_SOCKET_URL || "https://anime-realm-server.vercel.app";
const socketUrl = "https://anime-realm-server.vercel.app";

import {
  TextField,
  Button,
  List,
  ListItem,
  Typography,
  Card,
  CardContent,
  CardActions,
  useTheme,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

interface Message {
  id: string;
  author: string;
  text: string;
  date: Date;
}

type Room = "string";

interface ChatProps {
  userId: string;
}

interface MessagesByRoom {
  [key: string]: Message[];
}

const Chat = ({ userId }: ChatProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messagesByRoom, setMessagesByRoom] = useState<MessagesByRoom>({
    general: [],
  });
  const [input, setInput] = useState("");
  const [room, setRoom] = useState<string>("general");
  const [rooms, setRooms] = useState<string[]>(["general"]);
  const { palette } = useTheme();

  useEffect(() => {
    const newSocket = io(socketUrl);
    console.log("🚀 ~ useEffect ~ socketUrl:", socketUrl);
    setSocket(newSocket);

    newSocket.on("initialMessages", (messages: Message[]) => {
      setMessagesByRoom((prevMessagesByRoom) => ({
        ...prevMessagesByRoom,
        [room]: messages,
      }));
    });

    newSocket.on("message", (room: Room, message: Message) => {
      setMessagesByRoom((prevMessagesByRoom) => ({
        ...prevMessagesByRoom,
        [room]: [...(prevMessagesByRoom[room] || []), message],
      }));
    });

    newSocket.emit("getRooms");

    newSocket.on("roomsList", (rooms: string[]) => {
      setRooms(rooms);
    });

    newSocket.emit("joinRoom", room);

    return () => {
      //   newSocket.off("roomsList");

      newSocket.disconnect();
    };
  }, [room]);

  const handleSendMessage = () => {
    if (socket && input.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        author: userId,
        text: input,
        date: new Date(),
      };
      socket.emit("message", room, newMessage);
      setInput("");
    }
  };

  const handleRoomChange = (event: SelectChangeEvent<string>) => {
    setRoom(event.target.value);
  };

  const filteredMessages = messagesByRoom[room] || [];

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
        <Select
          fullWidth
          value={room}
          onChange={handleRoomChange}
          sx={{ mb: 2, color: palette.secondary[200] }}
        >
          {rooms.map((r) => (
            <MenuItem key={r} value={r}>
              {r}
            </MenuItem>
          ))}
        </Select>
        <List
          sx={{
            height: "40vh",
            overflowY: "auto",
            color: palette.secondary.main,
          }}
        >
          {filteredMessages.map((message = {} as Message) => (
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
                sx={{
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  textWrap: "wrap",
                  overflowX: "hidden",
                }}
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

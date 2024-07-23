import React, { useState, useEffect, useCallback } from "react";
import { useSocket } from "../providers/Socket";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { socket } = useSocket();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [roomCode, setRoomCode] = useState("");

  const handleRoonJoined = useCallback(
    ({ roomId }) => {
      console.log("room joined ", roomId);
      navigate(`/room/${roomId}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("joined-room", handleRoonJoined);

    return () => {
      socket.off("joined-room", handleRoonJoined);
    };
  }, [handleRoonJoined, socket]);

  const handleJoinRoom = () => {
    socket.emit("join-room", { emailId: email, roomId: roomCode });
  };

  return (
    <div className="homepage-container">
      <div className="input-container">
        <input
          type="email"
          value={email}
          placeholder="enter your email here"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          value={roomCode}
          placeholder="Enter room code"
          onChange={(e) => setRoomCode(e.target.value)}
        />

        <button onClick={handleJoinRoom}>Enter room</button>
      </div>
    </div>
  );
};

export default HomePage;

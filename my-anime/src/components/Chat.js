import React, { useContext, useState } from "react";
import firebase from "firebase";
import {
  Container,
  Grid,
  Box,
  Button,
  TextField,
  Avatar,
} from "@material-ui/core";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Loader } from "./Loader/Loader";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  if (loading) {
    return <Loader />;
  }

  if (messages < 1) {
    return <h1>Сообщений пока нет!</h1>;
  }

  return (
    <Container style={{ overflowY: "hidden" }}>
      <Grid
        container
        justify={"center"}
        style={{ height: window.innerHeight - 50, marginTop: 30 }}
      >
        <div
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid #ccc",
            overflowY: "auto",
          }}
        >
          {messages.map((message) => (
            <div
              key ={message.uid}
              style={{
                margin: 10,
                border:
                  user.uid === message.uid
                    ? "2px solid green"
                    : "2px dashed red",
                marginLeft: user.uid === message.uid ? "auto" : "10",
                width: "fit-content",
                padding: 10,
              }}
            >
              <Grid container>
                <Avatar src={message.photoUrl} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          alignItems={"flex-end"}
          direction={"column"}
          style={{ width: "80%" }}
        >
          <TextField
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant={"outlined"}
          />
          <Button onClick={sendMessage} variant={"outlined"}>
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Chat;

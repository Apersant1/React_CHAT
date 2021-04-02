import React, { useContext, useState, Fragment } from "react";
import firebase from "firebase";

import {
  Container,
  Grid,
  Box,
  Button,
  TextField,
  Avatar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Context } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Loader } from "./Loader/Loader";
import Message from "./Message";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState(""); // Вытаскиваем значения из input'a
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt") // Обращение к firebase
  );

  const sendMessage = async () => {
    if (value != ""){
      firestore.collection("messages").add({
        uid: user.uid,
        displayName: user.displayName,
        photoUrl: user.photoURL,
        text: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      }); // Добавляем запись в firestore
      setValue(""); // Очищаем input
    }
  };

  const onKeyDown = e =>{
    if(e.code == "Enter"){
      sendMessage()
    }
  }

  if (loading) {
    return <Loader />;
  }


  if (messages < 1) {
    return (
      <Fragment>
        <Grid
          container
          alignItems={"center"}
          direction={"column"}
          style={{ width: "80%" }}
        >
          <h1>Сообщений пока нет!</h1>
          <TextField
            fullWidth
            style={{
              marginTop: 30,
            }}
            placeholder={"Введите сообщение"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant={"outlined"}
            onKeyDown={onKeyDown}
          />
          <Button
            style={{
              marginTop: 30,
              backgroundColor: "#017AFB",
              color: "#ffffff",
              borderRadius: "80px",
            }}
            onClick={sendMessage}
            variant={"outlined"}
          >
            ✈
          </Button>
        </Grid>
      </Fragment>
    );
  }

  return (
    <Container style={{ overflow: "hidden" }}>
      <Grid
        container
        justify={"center"}
        style={{ height: window.innerHeight - 50, marginTop: 50 }}
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
            <Message
              data={message}
              displayName={message.displayName}
              photoURL={message.photoUrl}
              text={message.text}
            />
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
            placeholder={"Введите сообщение"}
            onChange={(e) => setValue(e.target.value)}
            variant={"outlined"}
            onKeyDown={onKeyDown}
          />
          <Button
            style={{
              marginTop: 30,
              backgroundColor: "#017AFB",
              color: "#ffffff",
              borderRadius: "80px",
            }}
            
            onClick={sendMessage}
            
            variant={"outlined"}
          >
            ✈
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Chat;

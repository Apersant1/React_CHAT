import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Context } from "../index";
import Card from "@material-ui/core/Card";
import { Avatar } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useAuthState } from "react-firebase-hooks/auth";

const useStyles = makeStyles({
  root: {
    Width: "50%",
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 18,
    color: "#fff",
    marginLeft: "10px",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Message({ data, key, displayName, photoURL, text }) {
  const { auth } = useContext(Context);
  const classes = useStyles();
  const [user] = useAuthState(auth); // Получение данных пользователя из контекста
  return (
    <Card
      style={{
        minWidth: 150,
        fontFamily: "Roboto",
        backgroundColor: user.uid === data.uid ? "#ccc" : "#017AFB",
        marginLeft: user.uid === data.uid ? "auto" : "10px",
        marginRight: user.uid === data.uid ? "10px" : "auto",
        marginBottom: 10,
        color: user.uid === key ? "#000" : "#fff",
        width: "fit-content",
        padding: 10,
      }}
    >
      <CardContent>
        <div
          style={{
            display: "flex",
            maxWidth: "150px",
            height: "50%",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginBottom: "5%",
          }}
        >
          <Avatar src={photoURL} />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {displayName}
          </Typography>
        </div>

        <Typography variant="body2" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}

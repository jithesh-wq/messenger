import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef((props, ref) => {
  const isUser = props.message.username === props.username;
  console.log(props.message.username);
  return (
    <div ref={ref} className={`message ${isUser && "message_user"}`}>
      <Card className={isUser ? "muc" : "mugc"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${props.message.username || "Unknown User"}:`}{" "}
            {props.message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;

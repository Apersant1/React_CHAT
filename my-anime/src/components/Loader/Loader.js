import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./Loader.css";
export const Loader = () => {
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justify={"center"}
      >
        <Grid container alignItems={"center"} direction={"column"}>
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

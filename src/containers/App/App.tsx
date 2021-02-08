import { Box, Container, Grid, Typography } from "@material-ui/core";
import * as React from "react";
import { FileUploader } from "../../components/features/FileUploader/";
import { TaskList } from "../../components/features/TaskList";

import "./App.css";

export const App: React.FunctionComponent = () => {
  return (
    <Container maxWidth="sm">
      <Grid container justify="center">
        <Box mt={4} mb={3}>
          <Typography variant="h5" align="center">
            textkernel
          </Typography>
          <Typography variant="h6" align="center">
            PDF File Converter
          </Typography>
        </Box>
      </Grid>

      <FileUploader />
      <TaskList />
    </Container>
  );
};

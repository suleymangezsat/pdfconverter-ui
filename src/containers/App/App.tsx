import { Container, Typography } from "@material-ui/core";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useConvertingActions } from "../../store/actions";
import { FileUploader } from "../../components/features/FileUploader/FileUploader";

import "./App.css";
import { RootState } from "../../store/state";

export const App: React.FunctionComponent = (props) => {
  const dispatch = useDispatch();
  const convertingActions = useConvertingActions(dispatch);
  const { convertingTasks } = useSelector((state: RootState) => {
    return {
      convertingTasks: state.converting.data,
    };
  });

  return (
    <Container maxWidth="sm">
      <div className="mg20">
        <Typography variant="h5">textkernel</Typography>
        <Typography variant="h6">PDF File Uploader</Typography>
      </div>

      <FileUploader upload={convertingActions.upload} />
    </Container>
  );
};

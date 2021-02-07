import { IconButton, List, Typography } from "@material-ui/core";
import { ReactElement, useEffect, useState } from "react";
import TextFileIcon from "@material-ui/icons/Description";
import { TextDialog } from "../../common/TextDialog";
import { Loader } from "../../common/Loader";
import { FileListItem } from "../../common/FileListItem";
import { ConvertingTask } from "../../../store/state/converting";
import { useInterval } from "../../../hooks/useInterval";
import { useConvertingStore } from "../../../hooks/useConvertingStore";

export const UploadedFileList = (): ReactElement => {
  const [selectedFile, setSelectedFile] = useState<ConvertingTask>();
  const { fetchAll, update, state } = useConvertingStore();
  debugger;

  useInterval(
    () => {
      const ids = state.data
        .filter((task) => task.status === "INIT")
        .map((filtered) => filtered.id);
      ids.length > 0 && update(ids);
    },
    1000,
    state.data.filter((task) => task.status === "INIT").length > 0
  );

  useEffect(() => {
    !state.initialized && fetchAll();
  }, [state.initialized, fetchAll]);

  return (
    <>
      <Typography variant="h6">List of Files</Typography>
      <Loader state={state} onRefresh={fetchAll}>
        <List>
          {state?.data?.map((fileTask, index) => (
            <FileListItem
              key={index}
              name={fileTask.originalFile.name}
              size={fileTask.originalFile.size}
              createdAt={fileTask.createdAt}
              status={fileTask.status}
            >
              <IconButton
                edge="end"
                disabled={fileTask.status !== "SUCCESS"}
                onClick={() => setSelectedFile(fileTask)}
              >
                <TextFileIcon />
              </IconButton>
            </FileListItem>
          ))}
        </List>
      </Loader>
      <TextDialog
        title="Converted Text"
        isOpen={!!selectedFile}
        onClose={() => setSelectedFile(undefined)}
        textPages={selectedFile?.convertingResult.documents}
      ></TextDialog>
    </>
  );
};

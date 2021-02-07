import { IconButton, List, Typography } from "@material-ui/core";
import { ReactElement, useEffect, useState } from "react";
import { useConvertingActions } from "../../../hooks/useConvertingActions";
import { useConvertingState } from "../../../hooks/useConvertingState";
import TextFileIcon from "@material-ui/icons/Description";
import { TextDialog } from "../../common/TextDialog";
import { Loader } from "../../common/Loader";
import { FileListItem } from "../../common/FileListItem";
import { ConvertingTask } from "../../../store/state/converting";
import { useInterval } from "../../../hooks/useInterval";

export const UploadedFileList = (): ReactElement => {
  const [selectedFile, setSelectedFile] = useState<ConvertingTask>();
  const { fetchAll, update } = useConvertingActions();
  const convertingState = useConvertingState();

  useInterval(
    () => {
      const ids = convertingState.data
        .filter((task) => task.status === "INIT")
        .map((filtered) => filtered.id);
      ids.length > 0 && update(ids);
    },
    1000,
    convertingState.data.filter((task) => task.status === "INIT").length > 0
  );

  useEffect(() => {
    !convertingState.initialized && fetchAll();
  }, [convertingState.initialized, fetchAll]);

  return (
    <>
      <Typography variant="h6">List of Files</Typography>
      <Loader state={convertingState} onRefresh={fetchAll}>
        <List>
          {convertingState?.data?.map((fileTask, index) => (
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

import { IconButton, List, Typography } from "@material-ui/core";
import { ReactElement, useEffect, useState } from "react";
import { useConvertingActions } from "../../../hooks/useConvertingActions";
import { useConvertingState } from "../../../hooks/useConvertingState";
import TextFileIcon from "@material-ui/icons/Description";
import { TextDialog } from "../../common/TextDialog";
import { Loader } from "../../common/Loader";
import { FileListItem } from "../../common/FileListItem";
import { ConvertingTask } from "../../../store/state/converting";

export const UploadedFileList = (): ReactElement => {
  const [selectedFile, setSelectedFile] = useState<ConvertingTask>();
  const { fetchAll } = useConvertingActions();
  const convertingState = useConvertingState();

  const handleRefresh = () => {
    fetchAll();
  };
  useEffect(() => {
    debugger;
    fetchAll();
  }, []);
  return (
    <>
      <Typography variant="h6">List of Files</Typography>
      <Loader state={convertingState} onRefresh={handleRefresh}>
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

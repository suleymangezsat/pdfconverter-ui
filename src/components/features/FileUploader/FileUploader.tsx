import { Button } from "@material-ui/core";
import React, { useState } from "react";
import * as ConvertingActions from "../../../store/actions/converting";
import { SelectFileButton } from "../../common/SelectFileButton/SelectFileButton";

export interface Props {
  upload: typeof ConvertingActions.upload;
}

export const FileUploader = ({ upload }: Props): JSX.Element => {
  const [selectedFiles, setSelectedFiles] = useState<FileList>();
  const selectFile = React.useCallback(
    (files: FileList | null) => {
      if (files) {
        setSelectedFiles(files);
      }
    },
    [setSelectedFiles]
  );
  const uploadFile = React.useCallback(() => {
    if (selectedFiles && selectedFiles.length > 0) {
      upload({
        file: selectedFiles[0],
      });
    }
  }, [selectedFiles, upload]);
  return (
    <>
      <SelectFileButton onSelect={selectFile}>Choose File</SelectFileButton>
      <div className="file-name">
        {selectedFiles && Array.from(selectedFiles).map((file) => file.name)}
      </div>
      <Button
        className="btn-upload"
        color="primary"
        variant="contained"
        component="span"
        disabled={!selectedFiles}
        onClick={() => uploadFile()}
      >
        Upload
      </Button>
    </>
  );
};

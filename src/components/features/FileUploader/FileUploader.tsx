import { Box, Button, Grid, IconButton, List } from "@material-ui/core";
import React, { ReactElement } from "react";
import { SelectFileButton } from "../../common/SelectFileButton/SelectFileButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { FileListItem } from "../../common/FileListItem";
import { useUploadingActions } from "../../../hooks/useUploadingActions";
import { useUploadingState } from "../../../hooks/useUploadingState";

export const FileUploader = (): ReactElement => {
  const { uploadFile, addFiles, deleteFile } = useUploadingActions();
  const uploadingState = useUploadingState();
  const selectedFiles = Object.values(uploadingState.data);

  const handleSelect = (files: FileList | null) => {
    files && files.length > 0 && addFiles(Array.from(files));
  };

  const handleUpload = () => {
    if (selectedFiles && selectedFiles.length > 0) {
      const validFiles: File[] = selectedFiles
        .filter((selectedFile) => !selectedFile.hasError)
        .map((filtered) => filtered.file);
      validFiles && uploadFile(validFiles);
    }
  };
  /**fileType="application/pdf" */
  return (
    <Box my={1}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <SelectFileButton onSelect={handleSelect}>Choose File</SelectFileButton>
        <Button
          color="primary"
          variant="contained"
          component="span"
          disabled={selectedFiles.length === 0}
          onClick={() => handleUpload()}
        >
          Upload
        </Button>
      </Grid>
      <List>
        {selectedFiles?.map((selected, index) => (
          <FileListItem
            key={index}
            name={selected.file.name}
            size={selected.file.size}
            color={selected.hasError ? "error" : "inherit"}
            status={selected.hasError ? "Upload failed" : "Ready to upload"}
            message={selected.errorMessages?.join("\n")}
          >
            <IconButton
              edge="end"
              onClick={() => deleteFile(selected.file.name)}
            >
              <DeleteIcon />
            </IconButton>
          </FileListItem>
        ))}
      </List>
    </Box>
  );
};

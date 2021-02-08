import { Box, Button, Grid, IconButton, List } from "@material-ui/core";
import React, { ReactElement } from "react";
import { SelectFileButton } from "../../common/SelectFileButton/SelectFileButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { FileListItem } from "../../common/FileListItem";
import { useFileStore } from "../../../hooks/useFileStore";

export const FileUploader = (): ReactElement => {
  const { uploadFile, addFiles, deleteFile, files } = useFileStore();
  const selectedFiles = Object.values(files.data);

  const handleSelect = (fileList: FileList | null) => {
    fileList && fileList.length > 0 && addFiles(Array.from(fileList));
  };

  const handleUpload = () => {
    if (selectedFiles && selectedFiles.length > 0) {
      const validFiles: File[] = selectedFiles
        .filter((selectedFile) => !selectedFile.hasError)
        .map((filtered) => filtered.file);
      validFiles && uploadFile(validFiles);
    }
  };
  return (
    <Box my={1}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <SelectFileButton onSelect={handleSelect} fileType="application/pdf">
          Choose File
        </SelectFileButton>
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

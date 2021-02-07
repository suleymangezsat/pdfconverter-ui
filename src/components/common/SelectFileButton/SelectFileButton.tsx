import { Button } from "@material-ui/core";
import React, { ChangeEvent, memo } from "react";

type Props = {
  children: React.ReactNode;
  fileType?: string;
  onSelect: (files: FileList | null) => void;
};

export const SelectFileButton = memo(
  ({ children, fileType, onSelect }: Props) => (
    <label>
      <input
        name="btn-upload"
        style={{ display: "none" }}
        type="file"
        accept={fileType}
        multiple={true}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onSelect(e.target.files)
        }
      />
      <Button variant="outlined" component="span">
        {children}
      </Button>
    </label>
  )
);

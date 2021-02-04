import { Button } from "@material-ui/core";
import React, { ChangeEvent, memo } from "react";

type Props = {
  children: React.ReactNode;
  onSelect: (files: FileList | null) => void;
};

export const SelectFileButton = memo((props: Props) => (
  <label htmlFor="btn-upload">
    <input
      id="btn-upload"
      name="btn-upload"
      style={{ display: "none" }}
      type="file"
      multiple={true}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        props.onSelect(e.target.files)
      }
    />
    <Button className="btn-choose" variant="outlined" component="span">
      {props.children}
    </Button>
  </label>
));

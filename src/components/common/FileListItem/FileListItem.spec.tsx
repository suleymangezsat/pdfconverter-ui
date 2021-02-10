import React from "react";
import { FileListItem } from "./FileListItem";
import { shallow } from "enzyme";

describe("components/common/FileListItem", () => {
  const name = "filename.pdf";
  const size = 128000;
  const status = "INIT";
  const color = "error";
  const createdAt = new Date("10/11/2011");
  const message = "An error occured.";

  const prepareComponent = (props?: any) => (
    <FileListItem
      name={name}
      size={size}
      status={status}
      color={color}
      createdAt={createdAt}
      message={message}
      {...props}
    >
      {<div data-testid="test">Example</div>}
    </FileListItem>
  );

  it("should render FileListItem component properly", () => {
    const component = shallow(prepareComponent());
    expect(component).toMatchSnapshot();
  });
});

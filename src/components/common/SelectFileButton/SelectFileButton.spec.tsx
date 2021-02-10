import React from "react";
import { shallow } from "enzyme";
import { SelectFileButton } from "./SelectFileButton";

describe("components/common/SelectFileButton", () => {
  const handleSelect = jest.fn();
  const fileType = "application/pdf";
  const children = <p>Test Text</p>;

  const prepareComponent = (props?: any) => (
    <SelectFileButton fileType={fileType} onSelect={handleSelect} {...props}>
      {children}
    </SelectFileButton>
  );

  it("should render SelectFileButton component correctly", () => {
    const component = shallow(prepareComponent());
    expect(component).toMatchSnapshot();
  });

  it("should render children when passed in", () => {
    const component = shallow(prepareComponent());
    expect(component.contains(children)).toEqual(true);
  });

  it("should set input file type correctly", () => {
    const component = shallow(prepareComponent());
    expect(component.find("input").getElement().props.accept).toEqual(fileType);
  });

  it("should call onSelect function when input changes", () => {
    const component = shallow(prepareComponent());
    const file = new File([""], "filename1.pdf", {
      type: "application/pdf",
      lastModified: new Date().getDate(),
    });
    component.find("input").simulate("change", { target: { files: [file] } });
    expect(handleSelect).toHaveBeenCalledWith([file]);
  });
});

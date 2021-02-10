import React from "react";
import { Error } from "./Error";
import { shallow } from "enzyme";

describe("components/common/Error", () => {
  const handleRefresh = jest.fn();

  it("should render Error component correctly", () => {
    const component = shallow(<Error onRefresh={handleRefresh} />);
    expect(component).toMatchSnapshot();
  });
  it("should trigger onRefresh", () => {
    const component = shallow(<Error onRefresh={handleRefresh} />);
    component.find("WithStyles(ForwardRef(Button))").simulate("click");
    expect(handleRefresh).toHaveBeenCalled();
  });
});

import { mount } from "@vue/test-utils";
import { Todo } from "./todo";

describe("Todo", () => {
  it("props数据显示", () => {
    const wrapper = mount(Todo, {});

    expect(wrapper.text()).toContain("todo");
  });
});

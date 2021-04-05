import LoginForm from "@/components/LoginForm";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  it("emits an event with a user data payload", async () => {
    const wrapper = mount(LoginForm);
    const input = wrapper.find("[data-testid='name-input']");
    input.setValue("Naser Ahadi");
    await wrapper.trigger("submit");

    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);

    const expectedPayload = { name: "Naser Ahadi" };
    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload);
});
});

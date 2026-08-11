import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world", triggers: { event: "test/hello-world" } },
  async ({ event, step }) => {
    await step.sleep("pause", "10s");
    return {
      message: `Hello ${event.data.email}`,
    };
  },
);

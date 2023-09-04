import { authRouter } from "./router/auth";
import { openaiRouter } from "./router/openai";
import { postRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  post: postRouter,
  openai: openaiRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

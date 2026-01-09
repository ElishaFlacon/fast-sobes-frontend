import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1)
  },
  runtimeEnv: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  }
});

export const serverEnv = createEnv({
  server: {
    DATABASE_URL: z.url(),
    OPEN_AI_API_KEY: z.string().min(1)
  },

  experimental__runtimeEnv: process.env
});

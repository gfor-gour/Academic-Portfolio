import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default {
  ...defineCloudflareConfig({}),
  // Run Next directly so `npm run build` can invoke OpenNext without recursion.
  buildCommand: "next build",
};

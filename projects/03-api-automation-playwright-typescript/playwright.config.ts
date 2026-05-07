import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  retries: 0,
  reporter: [["list"], ["html", { outputFolder: "reports/html", open: "never" }]],
  use: {
    baseURL: process.env.BASE_URL || "http://localhost",
    trace: "on-first-retry"
  }
});

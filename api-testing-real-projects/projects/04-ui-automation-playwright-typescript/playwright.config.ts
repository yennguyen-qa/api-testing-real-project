import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 45_000,
  retries: 0,
  reporter: [["list"], ["html", { outputFolder: "reports/html", open: "never" }]],
  use: {
    baseURL: process.env.BASE_URL || "http://localhost",
    headless: true,
    trace: "on-first-retry"
  }
});

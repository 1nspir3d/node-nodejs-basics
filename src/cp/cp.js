import { spawn } from "child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const spawnChildProcess = async (args) => {
  // Write your code here
  const cpFile = join(__dirname, "files", "script.js");
  const cp = spawn("node", [cpFile, ...args]);

  cp.stdout.on("data", (data) => {
    process.stdout.write(data);
  });

  cp.stderr.on("data", (data) => {
    process.stderr.write(data);
  });

  cp.on("close", (code) => {
    process.exit(code);
  });

  process.stdin.on("data", (data) => {
    cp.stdin.write(data.toString().trim());
  });
};

await spawnChildProcess(process.argv.slice(2));

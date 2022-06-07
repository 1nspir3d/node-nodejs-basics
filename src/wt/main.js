import * as os from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Worker } from "node:worker_threads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
  // Write your code here
  const workerFile = join(__dirname, "worker.js");

  const cpus = os.cpus();
  const workers = [];

  cpus.forEach((_, index) => {
    workers.push(
      new Promise((resolve) => {
        const worker = new Worker(workerFile, { workerData: 10 + index });
        worker.once("message", (data) =>
          resolve(workers.push({ status: "resolved", data }))
        );
        worker.once("error", () =>
          resolve(workers.push({ status: "error", data: null }))
        );
      })
    );
  });

  return await Promise.all(workers);
};

console.log(await performCalculations());

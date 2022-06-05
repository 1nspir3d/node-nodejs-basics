import * as path from "node:path";
import { release, version } from "node:os";
import { createServer as createServerHttp } from "node:http";
import { fileURLToPath, pathToFileURL } from "node:url";
import "./files/c.js";

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let unknownObject;

if (random > 0.5) {
  unknownObject = await import(
    pathToFileURL(path.join(__dirname, "files", "a.json")),
    {
      assert: { type: "json" },
    }
  ).then((data) => data.default);
} else {
  unknownObject = await import(
    pathToFileURL(path.join(__dirname, "files", "b.json")),
    {
      assert: { type: "json" },
    }
  ).then((data) => data.default);
}
console.log(unknownObject);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

export { unknownObject, createMyServer };

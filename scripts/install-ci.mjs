import { spawnSync } from "node:child_process";
const installed = spawnSync("npm", ["ci"], { stdio: "inherit" });
if (installed.error) throw installed.error;
process.exit(installed.status ?? 1);

import { execSync } from 'node:child_process';
function execCommandOutput(command) {
    return execSync(command, { stdio: ['ignore', 'pipe', 'ignore'] })
        .toString()
        .trim();
}
export function parseVersion(command, regex) {
    const version = execCommandOutput(command);
    const match = version.match(regex);
    if (!match) {
        throw new Error(`Unable to parse version: ${version}`);
    }
    return match[1];
}

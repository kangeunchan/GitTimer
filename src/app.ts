import {getRepository, listRepositories} from "./findRepository";

async function main() {
  await getRepository("kangeunchan", "Web");
  await listRepositories();
}

main();

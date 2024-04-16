import {Octokit} from "@octokit/rest";
require("dotenv").config();

const octokit = new Octokit({
  auth: process.env.TOKEN,
});

var repo = {
  owner: "",
  name: "",
  description: "",
  language: "",
  forks_count: 0,
};

async function getRepository() {
  const {data} = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "asd",
    repo: "Web",
  });

  repo.owner = data.owner.login;
  repo.name = data.name;
  repo.description = data.description ?? "";
  repo.language = data.language ?? "";
  repo.forks_count = data.forks_count;
}

async function main() {
  await getRepository();
  await listRepositories();
}


async function listRepositories() {
  const {data} = await octokit.request("GET /user/repos");
  const repositories = data.map((repo: any) => ({
    owner: repo.owner.login,
    name: repo.name,
    description: repo.description ?? "",
    language: repo.language ?? "",
    forks_count: repo.forks_count,
  }));
  console.log(repositories);
}

main();

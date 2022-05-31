#!/usr/bin/env ts-node

import { Octokit, App } from "octokit";
//import simpleGit, { SimpleGit, CleanOptions } from "simple-git";

const octokit = new Octokit({
  auth: process.env.GITHUB_AUTH_TOKEN,
});

// Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user
const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();
console.log("Hello, %s", login);
console.log("npm package");

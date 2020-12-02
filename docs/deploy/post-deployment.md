---
id: post-deployment
title: Post deployment
---

We recommend maintaining a GitHub repository for your Osso instance. This will let you implement GitHub based deploys on Heroku, utilize Dependabot for package updates, and manage any updates made to the main Osso project using Git.

You'll want to treat the main Osso repository as an upstream remote. Note that Osso uses main as the default branch.

The simplest approach is to first Fork the main Osso repository to your own account.
Then, from the command line, clone your fork and add the upstream remote:
git clone git@github.com:[your-username]/osso.git
cd osso
git remote add upstream git://github.com/enterprise-oss/osso.git

You can then merge upstream changes to your local clone, and push to your GitHub repo:
git fetch upstream
git merge upstream/main main
git push origin/main

You can use GitHub actions, Buildkite, or any CI tool to run Osso's tests as part of your deployment process.
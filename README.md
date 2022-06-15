# cloudflare-workers-template

A Cloudflare Workers template with Typescript and predefined opinionated ESLint and Prettier rules.

## Setup

- Using [create-cloudflare](https://github.com/cloudflare/templates/tree/main/packages/create-cloudflare) package:

```
yarn create cloudflare project-name https://github.com/Aynh/cloudflare-workers-template/
# or
npm init cloudflare project-name https://github.com/Aynh/cloudflare-workers-template/
```

- Manually:

```
# Clone the repository
git clone https://github.com/Aynh/cloudflare-workers-template/ project-name --depth 1

# Follow the step below if you want to re-initialize the git repository (optional)
cd project-name
# Remove .git folder
rm -rf .git
# Initialize git
git init .
```

### Install dependencies

```
yarn
# or
npm install
```

### Available scripts

Subsitute `yarn` with `npm run` if you use `npm`.

```
# Local development
yarn dev
# Remote development
yarn preview
# Publish to cloudflare
yarn publish
# Lint
yarn lint
# Type check
yarn typecheck
```

## Development

### Follow Cloudflare's [Get started guide](https://developers.cloudflare.com/workers/get-started/guide/) if you haven't already.

This template leverage Wrangler2's [module system](https://developers.cloudflare.com/workers/wrangler/module-system/#wranglers-module-system) to work, See [here](https://developers.cloudflare.com/workers/learning/migrating-to-module-workers/) if you are not familiar with Cloudflare Worker's [Module Worker](https://blog.cloudflare.com/workers-javascript-modules/) format.

- Linting

You may want to replace some (or all) ESLint rules defined at [`.eslintrc.cjs`](./.eslintrc.cjs). You can also remove linting entirely by deleting [`.eslintrc.cjs`](./.eslintrc.cjs) and removing all ESLint-related dependency.

- Formatting

You may also want replace Prettier rules at [`.prettierrc.json`](./.prettierrc.json).

## Recommended Package

- [itty-router](https://github.com/kwhitley/itty-router), nice tiny router to integrate with your worker.

## Learning source

- [Cloudflare Worker Docs](https://developers.cloudflare.com/workers/)
- [Serverless Guide](https://www.serverless.com/guides)
- [Node.js Docs](https://nodejs.org/en/docs/)
- [MDN Web Docs](https://mdn.dev/)

# web-based-kpi-widgets
2022-2023 DMSi Senior Design Capstone Project
Web Hosting test

## Getting Started

In order to run this project locally, the following tools must be installed on your machine

- [Node](https://nodejs.org/en/) version `14` or higher
- [Yarn](https://yarnpkg.com/en/) version `1.5` or higher

1. Install all dependencies using [yarn](https://classic.yarnpkg.com/en/).

```shell
yarn
```

2. Launch a development server

```shell
yarn dev
```

## Local Development

In our staging & production cloud environments this app will receive session data from [The-Force](https://github.com/dmsi-io/the-force). However, when running locally, this application will fetch necessary session data.
Create a `.env.development.local` in the repo's root directory file with the following format:

```shell
VITE_USERNAME=username
VITE_ORGID=org_id
VITE_PASSWORD=password
```

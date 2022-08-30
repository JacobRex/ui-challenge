# ui-challenge

![animated gif](/static/data-lo.gif)

This repo represents my submission for the ui challenge. I did my best to build as many custom components as possible in the 6 hour time frame, but ended up needing about 8 hours for the work seen here.

Each PR contains notes about some of the thoughts behind my decisions for the components as well as some considerations for how the component could be expanded on in the future. Please check out these notes to learn more about my thought process. I'm happy to chat with one of you to elaborate further.

I'm particularly excited by the approach taken with the layout/layer/modal system. Using provide/inject, I programmatically enforce where layers are mounted without an engineer needed to set any css! I think this could have huge advantages and be very convenient for engineers.

## Additional thoughts
In a real world setting, I imagine this repo really ought to be 2 separate repos: one which packages reusable UI components for use in projects, and another repo which is this project (the actual application that consumes these components). The vue components in the `/components` directory represent the "design system" or "ui component library" components, and the components in the `/layout` or `/pages` folders represent what I would consider the "project's" components. Because of the time constraint, this is simply one repo.

Thanks very much for your consideration!

https://intricately-ds.web.app/

## Build Setup

```bash
# ensure npm v12.16.1
$ nvm use

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Linting
I chose to lint with some basic eslint rules.


```bash
# Lint the code
$ npm run lint

# Lint the code and attempt to fix
$ npm run lintfix
```

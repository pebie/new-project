<p align='center'>
  <h1 align='center'>Rendering engine sandbox</h1>
  <p align='center'><img width='150' src='./readme.png' /></p>
  <p align='center'>A starter based on universal react applications v13.0.0.</p>
</p>

## About

This starter kit contains all the build tooling and configuration you need to kick off your next universal React project, whilst containing a minimal "project" set up allowing you to make your own architecture decisions (Redux/MobX etc).

Plus you can setup any canal+ rendering engine such as [tms-rendering-engine](https://gitlab.canalplus.pro/deddev/tms-rendering-engine)

For a complete documentation about React Universally please visit the [official documentation](https://github.com/ctrlplusb/react-universally)

## Intro

You should see the sandbox as an opportunity to build a realistic application using any canal + rendering engine.

## Prerequisites

- node  >= v7.x
- yarn (`npm install yarn -g`)
- scss_lint (`gem install scss_lint -v 0.53`) v0.53

## Running project:

- `make mocks-server` run a rest api based on tms
- `make dev` run http://localhost:1337

## Setup a rendering engine

**These steps are only for developing rendering-engine within the sandbox**

- Add rendering-engine source as a symlink to your rendering engine git repository under `./rendering` folder.

`ln -s absolute/path/to/your/git/repository/rendering/engine rendering`

*Notice:* `node_modules` should be installed in your rendering engine repository.

- Then you should setup `renderingEngine` node in your local sandbox config.

**Exemple with tms-rendering-engine :**

```javascript
/* ./config/default.js */

// Application rendering engine
renderingEngine: {
  // Entry point of your
  entry: './shared/app/Tms/',
  // Rendering engine config
  config: './shared/app/Tms/config/components/TmsConfig',
  // Rendering engine components path
  // Allow developer to use RenderingEngineSrc alias to import components'
  src: './rendering/tms-rendering-engine/src',//It's your symlink
}
```

| Key        | Definition           | Sample  |
| :------------- |:-------------| :-----|
| entry      | Path to your code entry point | `./shared/app/YourApplication` |
| config      | Path to a React component use to re-hydrate the configuration between the server and the client side.      |    |
| src | Allow developer to use `RenderingEngineSrc` alias to import components. Path to the source code of your rendering engine. It may contents `components`, `helpers` or whatever you need to import in your application.      | Use `RenderingEngineSrc` instead of `./shared/rendering/your-rendering-engine/src` when you import something in your application     |

- Finally run `make dev` and launch http://localhost:1337

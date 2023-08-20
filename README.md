# SERVICE API
![badge2](https://img.shields.io/badge/language-NodeJS-yellow)
[![Build Status](https://app.travis-ci.com/Estayparadox/Backend-CI-Boilerplate.svg?branch=master)](https://app.travis-ci.com/Estayparadox/Backend-CI-Boilerplate)

## Install

At the root of the project run
```
$> yarn install
```

## Commands

```
$> yarn prestart
```
Builds the content of the src/ folder and puts it in the build/ folder. When you issue the yarn start command, this script runs first before the start script.

```
$> yarn start
```
Serves the content of the build/ folder instead of the src/ folder we were serving previously. This is the script you’ll use when serving the file in production. In fact, services like Heroku automatically run this script when you deploy.
You should see the message below

```
$> yarn startdev
```
Start the server during development of the app using babel-node to run the app instead of regular node.
The --exec flag forces babel-node to serve the src/ folder using node since the files in the build/ folder have been compiled to ES5.

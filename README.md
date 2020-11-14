# SERVICE API
![badge2](https://img.shields.io/badge/language-NodeJS-yellow) [![Build Status](https://travis-ci.com/Tavernier-App/serviceapi.svg?token=DPyV2TJUZssxYKAMHpQ2&branch=master)](https://travis-ci.com/Tavernier-App/serviceapi) [![Coverage Status](https://coveralls.io/repos/github/Tavernier-App/serviceapi/badge.svg?branch=master)](https://coveralls.io/github/Tavernier-App/serviceapi?branch=master) [![Maintainability](https://api.codeclimate.com/v1/badges/3b98610bd5fdcf1e9af8/maintainability)](https://codeclimate.com/repos/5faf134a47c4b7018d00206a/maintainability) [![Build status](https://ci.appveyor.com/api/projects/status/k8h8jdw54r9t1q9y?svg=true)](https://ci.appveyor.com/project/Estayparadox/serviceapi)

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

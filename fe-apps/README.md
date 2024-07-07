# FeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Start Host App

Run `npm start:host` to start the host project

## Start User Feature App

Run `npm start:user` to start the user feat project


## Setup Module Federation Guide

### Install Angular architect - module federation with webpack
`npm i @angular-architects/module-federation`

### Add Host App to module federation setup with port 4200

`ng add @angular-architects/module-federation --project host --type host --port 4200`

### Add User Feature app to module federation setup with port 4101

`ng add @angular-architects/module-federation --project user-feat --type remote --port 4101`

## References

[Module Federation with Angular's Standalone Components](https://www.angulararchitects.io/en/blog/module-federation-with-angulars-standalone-components/)

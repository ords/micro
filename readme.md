# Getting Started
This Project uses Typescript and react to create a micro frontend architecture. Most over engineered project in the history of projects. Run npm install and `npm run build:minimal-required --workspaces --if-present` to build local files.

# Packages
Here the different packages are described. Please see the picture below for the high level architecture. All of our diffrent packages can contain both UI and or API code.

## Architecture
We consist of main parts:

- ui-framework
- ui-core
- ui-registy
- ui-library
- main-application

### UI Framework
The micro frontend framework used. The core code that enables our application to commuicate.

### UI Core
Contains contracts for app shell and core data services + reference to any singletons that are needed across the app. Will contain no view code.

### UI Registry
Self explaintory - register of ui features. Here features are registered on the "global" name scope. Think of it as the DNS of the our main-application.

### UI Library
Our Design System folder including common utils

## Main Application
There are three components to our main application. This is the configuration of our main application from all of our other packages.

- bootstrap
- routes
- layout

### Boostrap
Reference to boostrap code from features as needed. Example reference (to be implemented) is the bootstrap code to implement the Authorization service from the *auth feature*.

### Routes
Routes based on the paths in our registry with references to views from a feature.

### Layout
The purpose of a layout is to do view orchastration. A Layout will have a router which contains a set of routes. While a layout in general only display one View (matched route) it may also display view fragments. View fragment will in general not require a route and won't take up the entire screen. View Fragments could for example be a nav bar.

## Naming Convention Features
We have created a scaleable naming convention:

- feat_namespace_feature-name

Features don't need a name space, but as features invovle they a namespace may evolve as complexity grows. Examples of this could be feat_auth which over time may split into feat_auth_login and feat_aut_register.

## Interresting Reads
https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging
https://tsh.io/blog/micro-frontend-tutorial/
https://github.com/hasanayan/craco-module-federation

## Compatability Node v17 MacOS
export NODE_OPTIONS=--openssl-legacy-provider

## Packages Changed
To indentfy which package has changed since a commit and hence which you should consider to merge into your branch and build from master you can run the following command: 

`node ./tasks/getChangedPackages`

## todo
- Implement a tasks folder with tasks like:
- Create new features easily
- CI/CD Detect workspace changes and only build those needed

## Open source sync
git push github


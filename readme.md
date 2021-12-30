# Getting Started
This Project uses Typescript and react to create a micro frontend architecture. Most over engineered project in the history of projects.

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
There are three components to our main application.

- bootstrap
- feature
- layout

### Boostrap
Reference specific parts of modules which has boostrap code which are needed.

### Layout
Containers of features (views) or fragments (view fragments).

.. should illustrate this

### Feature
Feature implementations as required

### Naming Convention Features
We have created a scaleable naming convention:

- feat_namespace_feature-name

Features don't need a name space, but as features invovle they a namespace may evolve as complexity grows. Examples of this could be feat_auth which over time may split into feat_auth_login and feat_aut_register.

## Interresting Reads
https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging

## Compatability Node v17 MacOS
export NODE_OPTIONS=--openssl-legacy-provider

## todo
- implement a tasks folder with tasks like:
- Create new features
- Locally build workspaces needed
- Detect workspace changes and only build those needed

## Open source sync
git push github
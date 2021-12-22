# Getting Started
This Project uses Typescript and react to create a micro frontend architecture

# Packages
Here the different packages are described. Please see the picture below for the high level architecture.

## Architecture
We consist of four main parts:

- ui-framework
- ui-core
- ui-library
- ui-registy
- main-application

### UI Framework
The micro frontend framework used. The core code that enables our application to commuicate.

### UI Core
Contains contracts for app shell and core services + any singletons that are needed across the app.

### UI Registry
Self explaintory - register of ui features

### UI Library
Our Design System folder including common utils

### Main Application
The main application with the implementation of layouts and features. Every layout is meant to only ever have one routed view. Every you can have multiple fragments or a layout could also potentially contain multiple fragments along with the main view.

.. Should illustrate what i mean
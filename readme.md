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
Self explaintory - register of ui features. Here features are registered on the "global" name scope. Think of it as the DNS of the our main-application.

### UI Library
Our Design System folder including common utils

### Main Application
The main application with the implementation of layouts and features. Every layout is meant to only ever have one routed view. Every you can have multiple fragments or a layout could also potentially contain multiple fragments along with the main view.

.. Should illustrate what i mean

## Interresting Reads
https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API/Using_channel_messaging

## Brain Dump
Could move layouts into its own ui-layout package that way i could create standalone ui-feature--name packages which could reference a ui-layout package and then have its own playground. Our main application could then reference the ui-feature--name package as a way to decouple dependencies. We can then roll back or roll forward. 

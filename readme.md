# Getting Started

This Project uses Typescript & Yarn

# Packages
Here the different packages are described. Please see the picture below for the high level architecture.

## UI Core
Our Core framework we used to build our application is split into three projects.

- ui-core ()
- ui-core services
- ui-core registry

## UI Application

The UI application which implements all of our features

## UI Library

Our utils and component library


Our Core Framework for Building our UI application. Our Core project is our contract between all of our packages and we should therefore

Consider moving registry and also create core-services package which contains the providers for our UI core services

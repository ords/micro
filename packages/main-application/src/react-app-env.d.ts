/// <reference types="react-scripts" />

/*
 * Allows partial build of only feature packages by ignoring their type definitions
 * We should remove this declaration for proper builds of our main application
 */
declare module "@ords/feature_*" {
  export default function Component(props: any): JSX.Element;
}

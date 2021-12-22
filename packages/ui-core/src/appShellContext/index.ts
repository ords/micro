import { ObservableState } from "@ords/ui-framework";

export interface AppShellContext {
  title: string;
  container: "none" | "main";
}

export const appShellContext = new ObservableState<AppShellContext>({
  title: "Loading",
  container: "none",
});
import { LayoutConfig } from "../FeatureRegistry";
import { createBrowserHistory } from "history";
import pathToRegexp from "path-to-regexp";

export type LayoutParams<T> = T extends LayoutConfig<infer R> ? R : T;

export class Navigation {
  public history = createBrowserHistory();
  private historyLength = 0;
  private root?: {
    title?: string;
    stackReference?: number;
  };
  constructor() {
    this.history.listen((update) => {
      if (this.root?.stackReference === undefined) {
        return;
      }

      switch (update.action) {
        case "PUSH":
          this.root.stackReference--;
          this.historyLength++;
          break;
        case "POP": {
          this.root.stackReference++;
          this.historyLength--;
          break;
        }
        default:
      }
    });
  }
  rootTitle(): string | undefined {
    return this.root?.title;
  }
  push<T extends LayoutConfig<any>>(
    feature: T,
    params: LayoutParams<T>,
    options?: {
      root?: string;
    }
  ) {
    const { _unsafe, ...safeParams } = params;

    const url = pathToRegexp.compile(feature.path)(safeParams);

    if (options?.root) {
      this.root = {
        title: options.root,
        stackReference: 1,
      };
    }

    this.history.push(url, _unsafe);
  }
  goRoot<T extends LayoutConfig<any>>(
    feature: T,
    params: LayoutParams<T>
  ) {
    if (this.root?.stackReference !== undefined) {
      this.history.go(this.root.stackReference);
    } else {
      const { _unsafe, ...safeParams } = params;
      const url = pathToRegexp.compile(feature.path)(safeParams);
      this.history.replace(url, _unsafe);
    }
  }
  back<T extends LayoutConfig<any>>(
    feature: T,
    params: LayoutParams<T>
  ) {
    if (this.historyLength) {
      this.history.back();
    } else {
      const { _unsafe, ...safeParams } = params;
      const url = pathToRegexp.compile(feature.path)(safeParams);
      this.history.replace(url, _unsafe);
    }
  }
}

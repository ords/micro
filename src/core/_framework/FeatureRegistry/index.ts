export interface LayoutConfig<T extends Object> {
  path: string;
  params?: T;
  handler: (params: T) => any;
}

export class FeatureRegistry {
  private routes: Array<LayoutConfig<any>> = [];
  register(layoutConfig: LayoutConfig<any>) {
    this.routes.push(layoutConfig);
  }
  getRoutes() {
    return this.routes;
  }
}

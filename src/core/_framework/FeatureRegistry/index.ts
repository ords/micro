export interface LayoutConfig<T extends Object> {
  path: string;
  params?: T;
}

export class FeatureRegistry {
  private routes: Array<LayoutConfig<any>> = [];
  register<T>(layoutConfig: LayoutConfig<T>, handler: (params: T) => any) {
    this.routes.push(layoutConfig);
  }
  getRoutes() {
    return this.routes;
  }
}

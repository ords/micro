import { Authorization } from "./Authorization";
import { PersonalProfile } from "./PersonalProfile";

type Fetchers<T> = { [P in keyof T]?: () => Promise<T[P]> };
type Promised<T> = { [P in keyof T]?: Promise<T[P]> };

export class ServiceManager<SingletonMap extends object> {
  private factories: Fetchers<SingletonMap> = {};
  private singletons: Promised<SingletonMap> = {};
  register<K extends keyof SingletonMap>(
    serviceName: K,
    factory: () => Promise<SingletonMap[K]>
  ) {
    this.factories[serviceName] = factory;
  }
  resolve<K extends keyof SingletonMap>(
    serviceName: K
  ): Promise<SingletonMap[K]> {
    if (!this.singletons[serviceName]) {
      // handle grazefully
      this.singletons[serviceName] = this.factories[serviceName]!();
    }

    return this.singletons[serviceName]!;
  }
}

export const serviceManager = new ServiceManager<{
  authorization: Authorization;
  personalProfile: PersonalProfile;
}>();

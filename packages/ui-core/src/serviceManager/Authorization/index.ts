// When we implement this service we can make sure that it points to the official "login" feature
// then no other features need to point to the registry to find login feature
// that will allow us here to implement a "return to right place after login" idea

export interface Authorization {
  authenticated: boolean;
  login(): void
}

import { LayoutConfig, pushNavigate, navigateBack } from ".";

const service_propertyDetail_scoreAdd: LayoutConfig<{
  propertyPreference: number;
}> = {
  path: ":propertyPreference",
};

pushNavigate(
  service_propertyDetail_scoreAdd,
  {
    propertyPreference: 123,
  },
  { root: "Hello" }
);

navigateBack(service_propertyDetail_scoreAdd, {
  propertyPreference: 123,
});

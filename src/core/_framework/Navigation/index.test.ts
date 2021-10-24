import { LayoutConfig } from "../FeatureRegistry";
import { pushNavigate, navigateBack } from ".";

const service_propertyDetail_scoreAdd: LayoutConfig<{
  propertyPreference: number;
}> = {
  path: ":propertyPreference",
  handler: () => 5,
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

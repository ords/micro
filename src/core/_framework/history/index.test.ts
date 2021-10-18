import { LayoutConfig, pushNavigate, navigateBack } from ".";

type oservice_propertyDetail_scoreAdd = {
  propertyPreference: number;
};

const service_propertyDetail_scoreAdd: LayoutConfig<oservice_propertyDetail_scoreAdd> =
  {
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

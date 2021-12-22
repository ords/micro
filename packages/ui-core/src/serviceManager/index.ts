import { ServiceManager } from "@ords/ui-framework";

import { Authorization } from "./Authorization";
import { PersonalProfile } from "./PersonalProfile";

export const serviceManager = new ServiceManager<{
  authorization: Authorization;
  personalProfile: PersonalProfile;
}>();

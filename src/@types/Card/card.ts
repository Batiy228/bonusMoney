import { customerMarkParameters } from "./customerMarkParameters";
import { mobileAppDashboard } from "./mobileAppDashboard";

export interface card {
  customerMarkParameters: customerMarkParameters;
  mobileAppDashboard: mobileAppDashboard;
  companyId: string;
}

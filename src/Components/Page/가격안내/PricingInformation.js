import { AllInOne } from './AllInOne';
import { PlanningType } from './PlanningType';
import { PricingInformationIntro } from './PricingInformationIntro';

export function PricingInformation() {
  return (
    <>
      <PricingInformationIntro />
      <PlanningType />
      <AllInOne />
    </>
  );
}

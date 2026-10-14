import { FeatureStage } from "@/components/features/FeatureStage";
import type { MockupKey } from "@/lib/useCases";
import { UseCaseMockup } from "./mockups/UseCaseMockups";

/* Product mockups in the framed brand-background stage. Several mockups play
   as steps with tabs (hero); one mockup animates in when scrolled into view. */
export function UseCaseStage({
  id,
  name,
  mockups,
  steps,
  background,
  backgroundColor,
}: {
  id: string;
  name: string;
  mockups: MockupKey[];
  steps: { label: string; caption: string }[];
  background: string;
  backgroundColor: string;
}) {
  return (
    <FeatureStage
      id={id}
      name={name}
      background={background}
      backgroundColor={backgroundColor}
      steps={steps}
      screens={mockups.map((key) => <UseCaseMockup key={key} id={key} />)}
    />
  );
}

const BREATH = 0.012;
const PORTRAIT_BORDER = 2;
export const TEAM_PORTRAIT_GAP = 18;

export function createTeamOrbit({
  viewportWidth,
  contentWidth,
  height,
  count,
  portraitSize,
}: {
  viewportWidth: number;
  contentWidth: number;
  height: number;
  count: number;
  portraitSize: number;
}) {
  const mobile = viewportWidth < 1024;
  const narrow = viewportWidth < 375;
  const radius = Math.min(viewportWidth, height)
    * (mobile ? 0.34 : 0.4) * 0.8 * (mobile ? 1.45 : 1) * 1.12;
  const diameter = portraitSize + PORTRAIT_BORDER * 2;
  // Reserve room for the whole portrait, its ring and the shared breath.
  const radiusX = Math.min(radius, Math.max(1, (contentWidth / 2 - diameter / 2 - 12) / (1 + BREATH)));
  const radiusY = Math.min(
    radius * 0.86 * (mobile ? (narrow ? 1.8 : 1.4) : 1),
    Math.max(1, (height / 2 - diameter / 2 - 72) / (1 + BREATH)),
  );
  // Uniform angles on an ellipse have this conservative separation bound.
  // Fit portraits to short viewports without ever consuming their clear gap.
  const separation = 2 * Math.min(radiusX, radiusY) * (1 - BREATH)
    * Math.sin(Math.PI / Math.max(2, count));
  const portraitScale = count <= 1 ? 1
    : Math.min(1, Math.max(0, (separation - TEAM_PORTRAIT_GAP) / diameter));

  return { count, radiusX, radiusY, centerX: contentWidth / 2, centerY: height / 2, portraitScale };
}

export function teamOrbitPoint(
  orbit: ReturnType<typeof createTeamOrbit>,
  index: number,
  time: number,
  reducedMotion = false,
) {
  // One phase and one breath for the entire group: no overtaking or bunching.
  const angle = -Math.PI / 2 + index * Math.PI * 2 / Math.max(1, orbit.count)
    + (reducedMotion ? 0 : time * 0.07);
  const breath = reducedMotion ? 1 : 1 + BREATH * Math.sin(time * 0.6);
  return {
    x: orbit.centerX + Math.cos(angle) * orbit.radiusX * breath,
    y: orbit.centerY + Math.sin(angle) * orbit.radiusY * breath,
  };
}

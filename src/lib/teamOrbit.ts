const BREATH = 0.012;
const PORTRAIT_BORDER = 2;
export const TEAM_PORTRAIT_GAP = 18;
export const TEAM_CONTENT_GAP = 16;
export const TEAM_EDGE_GAP = 12;

/** Bounds relative to the composition centre, one per text line/CTA. */
export type OrbitRegion = { left: number; right: number; top: number; bottom: number };

export function createTeamOrbit({
  contentWidth, height, count, portraitSize, protectedWidth = 0,
  protectedHeight = 0, protectedRegions,
}: {
  viewportWidth: number;
  contentWidth: number;
  height: number;
  count: number;
  portraitSize: number;
  protectedWidth?: number;
  protectedHeight?: number;
  protectedRegions?: OrbitRegion[];
}) {
  const diameter = portraitSize + PORTRAIT_BORDER * 2;
  const width = protectedWidth || Math.min(contentWidth * 0.34, 320);
  const copyHeight = protectedHeight || Math.min(height * 0.3, 220);
  const regions = protectedRegions?.length ? protectedRegions : [{
    left: -width / 2, right: width / 2, top: -copyHeight / 2, bottom: copyHeight / 2,
  }];

  const fit = (scale: number) => {
    const radius = diameter * scale / 2;
    const maxX = (contentWidth / 2 - radius - TEAM_EDGE_GAP) / (1 + BREATH);
    const maxY = (height / 2 - radius - TEAM_EDGE_GAP) / (1 + BREATH);
    // Rounded expansion protects actual ink, including inward breath.
    // The extra pixel covers the small arcs between boundary samples.
    const padding = radius + TEAM_CONTENT_GAP + 1;
    const boundary = regions.flatMap(region => {
      const corners = [
        [region.right, region.bottom, 0], [region.left, region.bottom, Math.PI / 2],
        [region.left, region.top, Math.PI], [region.right, region.top, Math.PI * 1.5],
      ];
      return corners.flatMap(([x, y, start]) => Array.from({ length: 17 }, (_, i) => {
        const angle = start + i / 16 * Math.PI / 2;
        return { x: (x + Math.cos(angle) * padding) / (1 - BREATH), y: (y + Math.sin(angle) * padding) / (1 - BREATH) };
      }));
    });
    // Uniform angular spacing keeps every pair apart, even at ellipse tips.
    const separationRadius = count > 1
      ? (diameter * scale + TEAM_PORTRAIT_GAP) / (2 * Math.sin(Math.PI / count) * (1 - BREATH))
      : 0;
    const minX = Math.max(separationRadius, ...boundary.map(point => Math.abs(point.x) + 0.1));
    if (minX > maxX || separationRadius > maxY) return null;
    let best: { radiusX: number; radiusY: number; area: number } | null = null;
    for (let step = 0; step <= 80; step++) {
      const radiusX = minX + (maxX - minX) * step / 80;
      let radiusY = separationRadius;
      for (const point of boundary) {
        radiusY = Math.max(radiusY, Math.abs(point.y) / Math.sqrt(1 - (point.x / radiusX) ** 2));
      }
      const area = radiusX * radiusY;
      if (radiusY <= maxY && (!best || area < best.area)) best = { radiusX, radiusY, area };
    }
    return best;
  };

  // Prefer original portrait size. Scale only when a safe ellipse cannot
  // fit. The ellipse hugs the measured copy, not the screen edges.
  let portraitScale = 1;
  let shape = fit(1);
  if (!shape) {
    let lower = 0, upper = 1;
    for (let step = 0; step < 18; step++) {
      const middle = (lower + upper) / 2;
      if (fit(middle)) lower = middle; else upper = middle;
    }
    portraitScale = lower;
    shape = fit(lower);
  }
  return {
    count, radiusX: shape?.radiusX ?? 1, radiusY: shape?.radiusY ?? 1,
    centerX: contentWidth / 2, centerY: height / 2, portraitScale,
  };
}

function teamOrbitAngle(count: number, index: number, time: number, reducedMotion: boolean) {
  return index / Math.max(1, count) * Math.PI * 2 - Math.PI / 2
    + (reducedMotion ? 0 : time * 0.07);
}

/** Depth follows the orbit: gently recede at the back and return to the
 * original size at the front. Never exceed the collision-tested size. */
export function teamPortraitScale(
  orbit: ReturnType<typeof createTeamOrbit>, index: number, time: number, reducedMotion = false,
) {
  const depth = (Math.sin(teamOrbitAngle(orbit.count, index, time, reducedMotion)) + 1) / 2;
  return orbit.portraitScale * (0.72 + depth * 0.28);
}

export function teamOrbitPoint(
  orbit: ReturnType<typeof createTeamOrbit>, index: number, time: number, reducedMotion = false,
) {
  const angle = teamOrbitAngle(orbit.count, index, time, reducedMotion);
  const breath = reducedMotion ? 1 : 1 + BREATH * Math.sin(time * 0.6);
  return {
    x: orbit.centerX + Math.cos(angle) * orbit.radiusX * breath,
    y: orbit.centerY + Math.sin(angle) * orbit.radiusY * breath,
  };
}

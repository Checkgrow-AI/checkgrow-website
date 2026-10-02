export const PLATFORM_WORDS = ["Marketing", "Operations", "Sales", "Research", "Report"];
export const PLATFORM_DETAILS = ["Campaigns", "Social Media", "Website", "Leads", "Competitors", "Conversions", "AI Agents", "Insights"];

type Size = { width: number; height: number };
type Point = { x: number; y: number; visible: boolean };
type Region = Size & Point;

/** A loose constellation, never rows. Measure only on resize/font load,
 * reserve space for every label (even between fades), and place the
 * decorative marks on the nearest clear part of their surrounding oval. */
export function createPlatformConstellation({ width, height, words, details, icons }: {
  width: number; height: number; words: Size[]; details: Size[]; icons: Size[];
}) {
  const narrow = width < 640;
  const spanX = Math.min(width - 48, 1000);
  const spanY = Math.min(height - 64, 580);
  const regions: Region[] = [];
  const point = (x: number, y: number): Point => ({ x: width / 2 + x * spanX, y: height / 2 + y * spanY, visible: true });
  const inBounds = (p: Point, size: Size) => p.x - size.width / 2 >= 16 && p.x + size.width / 2 <= width - 16 && p.y - size.height / 2 >= 16 && p.y + size.height / 2 <= height - 16;
  const clear = (p: Point, size: Size, gap: number) => inBounds(p, size) && regions.every(r =>
    Math.abs(p.x - r.x) >= (size.width + r.width) / 2 + gap || Math.abs(p.y - r.y) >= (size.height + r.height) / 2 + gap);
  const remember = (p: Point, size: Size) => {
    if (p.visible) regions.push({ ...p, ...size });
    return p;
  };
  const anchors = narrow
    ? [[0, 0], [-0.19, -0.28], [0.27, -0.15], [-0.23, 0.22], [0.26, 0.34]]
    : [[0, 0], [-0.24, -0.26], [0.3, -0.18], [-0.27, 0.24], [0.25, 0.32]];
  const wordPoints = words.map((size, i) => remember(point(...anchors[i] as [number, number]), size));

  const detailAnchors = [[-0.3, -0.07], [0.29, 0.08], [-0.07, 0.13], [0.26, -0.36], [-0.2, 0.4], [0.02, -0.17], [-0.13, -0.44], [0.03, 0.49]];
  const detailPoints = details.map((size, i) => {
    const origin = point(...detailAnchors[i] as [number, number]);
    // Small local adjustments protect text without changing its grouping.
    for (const [dx, dy] of [[0, 0], [0, -16], [0, 16], [-20, 0], [20, 0], [0, -32], [0, 32]]) {
      const candidate = { ...origin, x: origin.x + dx, y: origin.y + dy };
      if (clear(candidate, size, 18)) return remember(candidate, size);
    }
    return { ...origin, visible: false };
  });

  const radiusX = Math.min(width * 0.43, 540);
  const radiusY = Math.min(height * 0.43, 340);
  const iconPoints = icons.map((size, i) => {
    const angle = -2.55 + i / icons.length * Math.PI * 2;
    for (const radial of [1, 1.08, 0.92, 0.84]) {
      for (const offset of [0, 0.08, -0.08, 0.16, -0.16, 0.24, -0.24]) {
        const p = { x: width / 2 + Math.cos(angle + offset) * radiusX * radial, y: height / 2 + Math.sin(angle + offset) * radiusY * radial, visible: true };
        if (clear(p, size, 18)) return remember(p, size);
      }
    }
    // Decoration yields to readable content on compact screens.
    return { x: width / 2, y: height / 2, visible: false };
  });
  return { words: wordPoints, details: detailPoints, icons: iconPoints };
}

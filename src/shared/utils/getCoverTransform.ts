export interface CoverImageTransform {
  width: number;
  height: number;
  x: number;
  y: number;
}

export function getCoverTransform(imageWidth: number, imageHeight: number): CoverImageTransform {
  const containerWidth = 320;
  const containerHeight = 154;

  const imageAspect = imageWidth / imageHeight;
  const containerAspect = containerWidth / containerHeight;

  let width,
    height,
    x = 0,
    y = 0;

  if (imageAspect > containerAspect) {
    height = containerHeight;
    width = height * imageAspect;
    x = (containerWidth - width) / 2;
  } else {
    width = containerWidth;
    height = width / imageAspect;
    y = (containerHeight - height) / 2;
  }

  return { width, height, x, y };
}

import { SilhouetteColor } from "../model";

export function getSilhouetteImage(color: SilhouetteColor): string {
  console.log(color);
  return `/img/silhouette/${color}.svg`;
}

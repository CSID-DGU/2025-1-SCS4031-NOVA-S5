import { SilhouetteColor } from "../model";

export function getScanCharacter(color: SilhouetteColor): string {
  console.log(color);
  return `/img/scan/Scan-${color}.svg`;
}

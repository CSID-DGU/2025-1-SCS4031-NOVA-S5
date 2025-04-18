import { SilhouetteColor } from "../model";

export function getSilhouetteInfo(color: SilhouetteColor): [string, string] {
  switch (color) {
    case "green":
      return ["제 이름은 꼭이에요!", "저는 모던한 카페의 스탬프를 찍어요!"];
    case "yellow":
      return ["제 이름은 팡이에요!", "저는 아기자기한 카페의 스탬프를 찍어요!"];
    case "orange":
      return ["제 이름은 쿡이에요!", "저는 알록달록한 카페의 스탬프를 찍어요!"];
    case "beige":
      return ["제 이름은 콕이에요!", "저는 힙한 카페의 스탬프를 찍어요!"];
    default:
      return ["", ""];
  }
}

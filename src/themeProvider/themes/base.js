import { LIGHT } from "./light";
import { DARK } from "./dark";
export function themeCreator(theme) {
  return themeMap[theme];
}
const themeMap = {
  LIGHT,
  DARK,
};

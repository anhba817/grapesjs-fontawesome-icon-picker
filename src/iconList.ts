/* eslint-disable @typescript-eslint/no-explicit-any */
import icons from "./fontawesome_icons.json";

const iconData = icons as Record<string, any>;
const iconList = Object.keys(iconData as Record<string, any>).map((key) => ({
  name: key,
  changes: iconData[key].changes,
  styles: iconData[key].styles, // e.g., ['solid', 'brands']
}));

export default iconList;

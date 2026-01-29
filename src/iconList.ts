/* eslint-disable @typescript-eslint/no-explicit-any */
import icons from "./fontawesome_icons.json";

export const FONTAWESOME_VERSION = "7.0.1";

const iconData = icons as Record<string, any>;
export const iconList = Object.keys(iconData as Record<string, any>).map(
  (key) => ({
    name: key,
    changes: iconData[key].changes,
    styles: iconData[key].styles, // e.g., ['solid', 'brands']
  }),
);

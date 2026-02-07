/* eslint-disable @typescript-eslint/no-explicit-any */
import icons from "./fontawesome_icons.json";

export const FONTAWESOME_VERSION = "7.0.1";
export const FONTAWESOME_CDN = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${FONTAWESOME_VERSION}/css/all.min.css`;

const iconData = icons as Record<string, any>;
export const iconList = Object.keys(iconData as Record<string, any>).map(
  (key) => ({
    name: key,
    changes: iconData[key].changes,
    styles: iconData[key].styles, // e.g., ['solid', 'brands']
  }),
);

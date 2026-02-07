import { type Editor } from "grapesjs";
import loadBlocks from "./blocks";
import loadComponents from "./components";
import loadTraits from "./traits";
import loadStyles from "./styles";
import { FontAwesomePluginOptions } from "./types";

export { FONTAWESOME_CDN } from "./iconList";

export default (editor: Editor, opts: FontAwesomePluginOptions = {}) => {
  const options: FontAwesomePluginOptions = {
    ...{
      // default options
    },
    ...opts,
  };

  // Load styles
  loadStyles(editor, options);
  // Add custom traits
  loadTraits(editor, options);
  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);
};

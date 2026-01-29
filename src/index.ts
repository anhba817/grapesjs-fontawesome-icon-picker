import { type Editor } from "grapesjs";
import loadBlocks from "./blocks";
import loadComponents from "./components";
import loadTraits from "./traits";
import loadStyles from "./styles";
import { FontAwesomePluginOptions } from "./types";

export default (editor: Editor, opts: FontAwesomePluginOptions = {}) => {
  const options: FontAwesomePluginOptions = {
    ...{
      fontAwesomeCdnUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
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

  // TODO Remove
  editor.on("load", () =>
    editor.addComponents(
      `<div style="margin:100px; padding:25px;">
            Content loaded from the plugin
        </div>`,
      { at: 0 },
    ),
  );
};

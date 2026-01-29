import { type Editor } from "grapesjs";

export default (editor: Editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add("fontawesome-icon", {
    label: "Icon",
    content: { type: "fa-icon" },
    attributes: { class: "fa fa-star" }, // Icon for the block itself
    category: "Basic",
  });
};

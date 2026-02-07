import { type Editor } from "grapesjs";
import { FONTAWESOME_CDN } from "./iconList";
import { FontAwesomePluginOptions } from "./types";

export default (editor: Editor, opts: FontAwesomePluginOptions = {}) => {
  const styleTag = document.createElement("style");
  const head = document.head;

  styleTag.innerHTML = `
.icon-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 12px;
  max-height: 50vh;
  overflow-y: auto;
  text-align: center;
  padding: 10px;
}

.icon-item {
  padding: 15px 5px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s;
  color: #ddd;
}

.icon-item i {
  font-size: 36px;
  display: block;
}

.icon-item:hover {
  background: #3b97e3;
  color: white;
};
`;

  head.appendChild(styleTag);

  editor.on("load", () => {
    const head = editor.Canvas.getDocument().head;
    head.insertAdjacentHTML(
      "beforeend",
      `<link rel="stylesheet" href="${FONTAWESOME_CDN}">`,
    );
  });
};

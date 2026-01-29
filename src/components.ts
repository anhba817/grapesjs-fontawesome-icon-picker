import { type Editor } from "grapesjs";

export default (editor: Editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType("fa-icon", {
    isComponent: (el) =>
      el.tagName === "I" && el.classList.contains("fa-solid"),
    model: {
      defaults: {
        tagName: "i",
        attributes: { class: "fa-solid fa-star" }, // Default icon
        traits: [
          {
            type: "fa-picker", // Use our new custom trait
            label: "Icon Library",
            name: "class",
          },
        ],
        styles: `
        display: inline-block; 
        padding: 10px; 
        min-width: 20px; 
        min-height: 20px;
      `,
      },
    },
  });
};

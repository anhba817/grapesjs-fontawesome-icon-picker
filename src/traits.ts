import { type Editor } from "grapesjs";
import { iconList } from "./iconList";

export default (editor: Editor, opts = {}) => {
  const traits = editor.Traits;

  traits.addType("fa-picker", {
    createInput() {
      const el = document.createElement("div");
      el.innerHTML = `
      <button type="button" class="gjs-btn-prim" style="width:100%">
        Pick Icon
      </button>
    `;

      const btn = el.querySelector("button");
      btn!.addEventListener("click", () => this.openModal());
      return el;
    },

    openModal() {
      const modal = editor.Modal;
      const target = this.target;

      // 1. Create Modal UI structure
      const container = document.createElement("div");
      container.innerHTML = `
      <div style="padding: 10px;">
        <input type="text" id="fa-search" placeholder="Search icons (e.g. 'user', 'arrow')..." 
               style="width:100%; padding:10px; margin-bottom:15px; border-radius:4px; border:1px solid #333; background:#222; color:white;">
        <div id="fa-grid" class="icon-grid-container">Loading icons...</div>
      </div>
    `;

      modal.setTitle("FontAwesome Icon Library").setContent(container).open();

      const grid = container.querySelector("#fa-grid");
      const searchInput = container.querySelector(
        "#fa-search",
      ) as HTMLInputElement;

      try {
        const renderGrid = (filter = "") => {
          grid!.innerHTML = "";
          const filtered = iconList
            .filter((icon) => icon.name.includes(filter.toLowerCase()))
            .slice(0, 200); // Limit to 200 for performance while typing

          filtered.forEach((icon) => {
            const style = icon.styles.includes("brands")
              ? "fa-brands"
              : "fa-solid";
            const iconEl = document.createElement("div");
            iconEl.className = "icon-item";
            iconEl.innerHTML = `<i class="${style} fa-${icon.name}"></i><div style="font-size:10px; margin-top:5px;">${icon.name}</div>`;

            iconEl.onclick = () => {
              target.setAttributes({ class: `${style} fa-${icon.name}` });
              modal.close();
            };
            grid!.appendChild(iconEl);
          });
        };

        // 3. Initial render & Search Event
        renderGrid();
        searchInput.oninput = (e) =>
          renderGrid((e.target as HTMLInputElement).value);
      } catch (err) {
        grid!.innerHTML = "Error loading icons. Please check your connection.";
        console.error(err);
      }
    },
  });
};

let container = $(".container");
let refreshBtn = $("#refreshPalette");

let maxPaletteBox = 12;

const generatePalette = () => {
  container.empty(); // Clear the previous palette before generating a new one

  for (let i = 0; i < maxPaletteBox; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    const color = $(document.createElement("li")); // Corrected this line
    color.addClass("color");
    color.attr("color_code", randomHex);
    color.html(`
      <div class="rect-box" style="background: ${randomHex}"></div>
      <span class="hex-value">${randomHex}</span>
    `);
    container.append(color);
    color.on({
      click: () => copyColor(color, randomHex)
    })
  }
};

function copyColor(element, hex_code) {
  navigator.clipboard.writeText(hex_code).then(() => {
    $(element).find(".hex-value").text("Copied"); // Use $(element) to select the correct element
    setTimeout(() => {
      $(element).find(".hex-value").text(hex_code); // Use $(element) to select the correct element
    }, 1000);
  });
}


refreshBtn.on({
  click: generatePalette,
});
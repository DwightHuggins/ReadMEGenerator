const fs = require("fs");
const path = require("path");

function generateMarkdown(data) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, "template.md"), "utf8", function (
      err,
      md
    ) {
      if (err) return reject(err);

      Object.keys(data).forEach((key) => {
        md = md.replace("{{" + key + "}}", data[key]);
      });

      resolve(md);
    });
  });
}

// function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
// `;
// }

module.exports = generateMarkdown;

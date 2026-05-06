const fs = require("fs");

// We read the file as a string
let content = fs.readFileSync("./teleplist.js", "utf8");

// Use a regex to grab everything inside the brackets [ ... ]
const arrayMatch = content.match(/\[[\s\S]*\]/);

if (arrayMatch) {
  // This safely evaluates the string as a JS object
  const data = eval(arrayMatch[0]);

  fs.writeFileSync("telepList.json", JSON.stringify(data, null, 2), "utf8");
  console.log("Successfully created telepList.json");
} else {
  console.error("Could not find the array in the file.");
}

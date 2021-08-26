const _ = require("lodash");

function split(str) {
  return _.split(str.substr(0, 1000), "\n");
}

/**
 *
 * @param {*} splitStr array from string.split()
 */
function parse(splitStr) {
  let result = "<html><body>";
  let isParagraphOpen = false;
  let isListOpen = false;

  // loop over the array from the beginning
  for (let i = 0; i < splitStr.length; i++) {
    const str = splitStr[i].trim();

    if (str.startsWith("##")) {
      if (isListOpen) {
        result += "</ul>";
        isListOpen = false;
      }
      if (isParagraphOpen) {
        result += "</p>";
        isParagraphOpen = false;
      }
      result += `<h2>${str.substr(2)}</h2>`;
      continue;
    }
    if (str.startsWith("#")) {
      if (isListOpen) {
        result += "</ul>";
        isListOpen = false;
      }
      if (isParagraphOpen) {
        result += "</p>";
        isParagraphOpen = false;
      }
      result += `<h1>${str.substr(1)}</h1>`;
      continue;
    }

    if (str.startsWith("-")) {
      const text = str.split("-")[1].trim();
      if (isListOpen) result += `<li>${text}</li>`;
      else {
        if (isParagraphOpen) {
          result += "</p>";
          isParagraphOpen = false;
        }
        result += `<ul><li>${text}</li>`;
        isListOpen = true;
      }
      continue;
    }

    if (isParagraphOpen) {
      if (str === "") {
        result += "</p>";
        isParagraphOpen = false;
      } else result += str;
    } else {
      if (isListOpen) {
        result += "</ul>";
        isListOpen = false;
      }

      result += `<p>${str}`;
      isParagraphOpen = true;
    }
  }

  // close any open tags
  if (isListOpen) {
    result += "</ul>";
    isListOpen = false;
  }
  if (isParagraphOpen) {
    result += "</p>";
    isParagraphOpen = false;
  }

  return (result += "</body></html>");
}

module.exports = {
  split,
  parse,
};

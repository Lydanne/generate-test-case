const { readFileSync } = require("fs");

function parseTemplate(inTemplatePath, count) {
  const inTemplate = readFileSync(inTemplatePath, {
    encoding: "utf-8",
  });
  const result = [];

  const codeStrList = extract(inTemplate);

  const base = require("../generate/base");
  const string = require("../generate/string");
  const array = require("../generate/array");
  const number = require("../generate/number");
  const tree = require("../generate/tree");

  const generate = Object.assign(
    base,
    string,
    array,
    number,
    tree,
    require("../transform/tree")
  );

  for (let i = 0; i < count; i++) {
    const $i = i;
    let temp = inTemplate;
    codeStrList.forEach(({ template, code }) => {
      // @ts-ignore
      with (generate) {
        temp = temp.replace(template, eval(code));
      }
    });
    result.push(temp);
  }

  return result;
}

function extract(template) {
  const result = matchCode(template);
  return result.map((template) => ({
    template,
    code: template.substr(1, template.length - 2),
  }));
}

function matchCode(str) {
  let stack = 0;
  let isMatch = false;
  let tempStr = "";
  const result = [];
  for (let i = 0; i < str.length; i++) {
    if (!isMatch && str[i] === "/") {
      if (str[i + 1] === "{") {
        str = str.slice(0, i) + str.slice(i + 1);
      }
      continue;
    }
    if (str[i] === "{") {
      stack++;
      if (stack === 1) {
        isMatch = true;
      }
    }
    if (isMatch) {
      tempStr += str[i];
    }
    if (isMatch && str[i] === "}") {
      stack--;
      if (stack === 0) {
        result.push(tempStr);
        isMatch = false;
        tempStr = "";
      }
    }
  }

  return result;
}

module.exports = { parseTemplate };

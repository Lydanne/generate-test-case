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
  const generate = Object.assign(base, string, array, number);

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
  const result = template.match(/(?<!\\){.+?(?<!\\)}/gim) || [];
  return result.map((template) => ({
    template,
    code: template.substr(1, template.length - 2),
  }));
}

module.exports = { parseTemplate, extract };

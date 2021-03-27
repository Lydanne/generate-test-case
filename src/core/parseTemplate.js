function parseTemplate(inTemplate, count) {
  const result = [];

  const codeStrList = extract(inTemplate);

  const { repeat } = require("../generate/base");
  const {
    randomStr,
    repeatRandomStr,
    repeatStr,
    randomNStr,
    randomEnWord,
  } = require("../generate/string");
  const { randomArray } = require("../generate/array");
  const { random } = require("../generate/number");

  for (let i = 0; i < count; i++) {
    const $i = i;
    let temp = inTemplate;
    codeStrList.forEach(({ template, code }) => {
      temp = temp.replace(template, eval(code));
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

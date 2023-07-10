module.exports.parse = async ({ content, name, url }, { yaml, axios, notify }) => {
  const { data } = await axios.get('https://raw.githubusercontent.com/camoth/rules/master/clash.yml');
  const { mixin } = yaml.parse(data);
  const extra = {
    rules: [
      ...content.rules,
      ...mixin.rules,
    ],
  }
  return {
    ...content,
    ...extra,
  };
};
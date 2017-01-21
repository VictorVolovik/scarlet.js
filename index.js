const scarlet = (elem, str="", props={}, children=[]) => {
  for (let prop in props) {
    str = str.replace(new RegExp('{' + prop + '}', 'g'), props[prop]);
  }
  let childElems = children.join('');
  return `<${elem}>${str}${childElems}</${elem}>`;
};

if ((typeof module !== 'undefined') && (typeof module.exports !== 'undefined')) {
    module.exports = scarlet;
}

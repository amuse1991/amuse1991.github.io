const creatAndAppendChild = (tagName, $parent, attributes) => {
  const { className } = attributes;
  const $elem = document.createElement(tagName);
  $elem.setAttribute("class", className);
  $parent.appendChild($elem);
  return $elem;
};

export default { creatAndAppendChild };

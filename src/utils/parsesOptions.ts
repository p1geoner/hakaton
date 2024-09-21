export const parsesOptions = {
  // @ts-ignore
  replace(domNode: DOMNode) {
    if ('attribs' in domNode && 'style' in domNode.attribs) {
      domNode.attribs.style = '';
    }
  },
};

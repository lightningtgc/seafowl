walking(node, callback)  => {
  if (node.nodeType === 1 || node.nodeType === 3) {
    var returnValue = callback(node);
    if (returnValue === false) {
      return;
    }
  }

  if (node.nodeType === 1) {
    var current = node.firstChild;
    while (current) {
      walking(current, callback);
      current = current.nextSibling;
    }
  }
}



function strOp(str) {
  return str
    .toString()
    .replace(/\s/g, '')
    .toLowerCase();
}

function objectValues(value) {
  return Object.values(value).reduce(
    (string, val) =>
      string +
      (typeof val === 'object' && val !== null
        ? strOp(objectValues(val))
        : strOp(val))
  );
}

export function filter(val, data) {
  return data.filter(el => {
    return !!val.length ? objectValues(el).includes(strOp(val)) : true;
  });
}

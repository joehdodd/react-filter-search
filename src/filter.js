import pick from 'pick-deep'

function strOp(str) {
  return str
    .toString()
    .replace(/\s/g, '')
    .toLowerCase();
}

function objectValues(value, pickAttr) {
  return (pickAttr ? Object.values(pick(value, pickAttr)) : Object.values(value)).reduce((string, val) => {
    const test = val !== null && val !== undefined;
    return (
      string +
      (typeof val === 'object' && val !== null
        ? strOp(objectValues(val))
        : test ? strOp(val) : '')
    );
  }, '');
}

export function filter(val, data, pick) {
  return data.filter(el => {
    return !!val.length ? objectValues(el, pick).includes(strOp(val)) : true;
  });
}

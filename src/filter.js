import omitDeep from 'omit-deep';

function strOp(str) {
  return str
    .toString()
    .replace(/\s/g, '')
    .toLowerCase();
}

function objectValues(value, omit) {
  return Object.values(omitDeep(JSON.parse(JSON.stringify(value)), omit)).reduce((string, val) => {
    const test = val !== null && val !== undefined;
    return (
      string +
      (typeof val === 'object' && val !== null
        ? strOp(objectValues(val))
        : test ? strOp(val) : '')
    );
  }, '');
}

export function filter(val, data, omit) {
  return data.filter(el => {
    return !!val.length ? objectValues(el, omit).includes(strOp(val)) : true;
  });
}

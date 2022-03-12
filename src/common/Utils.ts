export const obj2String = (obj: Object) => {
  let res = '';
  const noQuotesArr = ['number', 'boolean'];
  Object.keys(obj).forEach((key) => {
    res += `${key}: `;
    if (noQuotesArr.includes(typeof obj[key])) {
      res += `${obj[key]}, `;
    } else {
      res += `'${obj[key]}', `;
    }
  });
  res = '{ ' + res + '}';
  return res;
};

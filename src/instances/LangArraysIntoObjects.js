export const langArrToObject = (array) => {
  // convert object to array of objects
  const result = {};

  array.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (!["id", "lable", "value", "selected"].includes(key)) {
        if (!result[key]) result[key] = {};
        result[key][item.value] = item[key];
      }
    });
  });

  return result;
};

export function getMonthDate (data) {
  const split = data.split('/')

  const splitTransform = new Date(split[2], split[1] - 1, split[0]);

  return splitTransform.getMonth()
 }
export const chunkArray = (arr, size) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (value, idx) => {
    return arr.slice(idx * size, idx * size + size);
  });
};

export const collectNeededValues = (
  source,
  neededValue1,
  neededValue2,
  idx = 0
) => {
  return source[idx].reduce((acc, val) => {
    acc.push(val[neededValue1][neededValue2]);
    return acc;
  }, []);
};

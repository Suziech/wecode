const getEvenNumber = () => {
  const resultArr = [];
  for (let i = 1; i < 51; i++) {
    if (i % 2 === 0) {
      resultArr.push(i);
    }
  }
  return resultArr;
};

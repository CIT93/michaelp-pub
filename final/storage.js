const saveToLS = function (countdownData) {
  const serializedArr = JSON.stringify(
    countdownData.map(item => ({
      ...item,
      selectedDate: item.selectedDate.toISOString(),
      nextXmasDate: item.nextXmasDate.toISOString(),
    }))
  );
  localStorage.setItem("countdown", serializedArr);
};

const getLS = function () {
  const retrievedArr = localStorage.getItem("countdown");
  if (retrievedArr !== null) {
    const parsedArr = JSON.parse(retrievedArr);
    return parsedArr.map(item => ({
      ...item,
      selectedDate: new Date(item.selectedDate),
      nextXmasDate: new Date(item.nextXmasDate),
    }));
  }
  return [];
};

const countdownData = getLS();

export { countdownData, saveToLS, getLS };

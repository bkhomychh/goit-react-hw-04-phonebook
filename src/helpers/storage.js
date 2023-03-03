const saveDataToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error.message);
  }
};

const getDataFromStorage = key => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
  } catch (error) {
    console.log(error.message);
  }
};

export { saveDataToStorage, getDataFromStorage };

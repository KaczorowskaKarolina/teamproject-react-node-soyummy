const getIngList = async ingArray => {
  const ingReturnedArray = ingArray.map(async ing => {
    const { id, measure } = ing;
    const response = await fetch(
      `http://localhost:5000/api/getIngredientById/${id}`
    );
    const responseJson = await response.json();
    const [{ thb, ttl }] = responseJson.data.file;
    const returnedIngredients = { thb, ttl, id, measure };

    // thb - image
    // ttl - title
    return returnedIngredients;
  });

  return ingReturnedArray;
};

export { getIngList };

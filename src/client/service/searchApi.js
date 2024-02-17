import axios from "axios";

// ==>  TO CONFIRM <==//
 axios.defaults.baseURL = process.env.BASE_URL;

 export const getSearchByTitle = async (
    query,
    page = 1,
    limit = 12,
    sort = "popular"
  ) => {
    try {
      const { data } = await axios.get(
        `/recipes/title/${query.trim()}?page=${page}&limit=${limit}&sort=${sort}`
      );
      return data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };
  
  export const getSearchByIngredients = async (
    query,
    page = 1,
    limit = 12,
    sort = "popular"
  ) => {
    try {
      const { data } = await axios.get(
        `/recipes/ingredient/${query.trim()}?page=${page}&limit=${limit}&sort=${sort}`
      );
      return data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  export const patchRecipeFavoriteById = async (id) => {
    try {
      const { data } = await axios.patch(`/recipes/favorite/${id}`);
      return data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };
  
  export const patchRecipeLikeById = async (id) => {
    try {
      const { data } = await axios.patch(`/recipes/like/${id}`);
      return data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };
import axios from "axios";

const api = axios.create({
  baseURL: "https://church.saeedantechpvt.com/",
});

export const getAllBlogs = () => async () => {
  try {
    const response = await api.get(
      "https://church.saeedantechpvt.com/api/blog"
    );
    return response;
  } catch (error) {
    throw error;
  }
};
export const getAllNews = () => async () => {
  try {
    const response = await api.get(
      "https://church.saeedantechpvt.com/api/news"
    );
    return response;
  } catch (error) {
    throw error;
  }
};

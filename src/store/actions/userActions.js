import axios from "axios";

const api = axios.create({
  baseURL: "https://church.saeedantechpvt.com/",
});

const getToken = () => {
  return localStorage.getItem("token");
};

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers[
        "Authorization"
      ] = `Bearer 2|kJeTJ0kIOJhly30kxIixe9F904ESQVuZ7gtTce6wca99831c`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const prayRequest = (formData) => async (dispatch) => {
  try {
    const res = await api.post("api/jobPost", formData);
    return res;
  } catch (err) {
    throw err;
  }
};

export const contactUs = (formData) => async () => {
  try {
    // console.log("in try Statement=========");
    const response = await api.post(
      "https://church.saeedantechpvt.com/api/contactus",
      formData
    );
    return response;
  } catch (error) {
    // console.log("in catch Statement=========");
    throw error;
  }
};
export const getPrayRequest = () => async () => {
  try {
    const response = await api.get(
      "https://church.saeedantechpvt.com/api/parayercategory"
    );
    return response;
  } catch (error) {
    throw error;
  }
};
export const postPrayRequest = (formData) => async () => {
  try {
    const response = await api.post(
      "https://church.saeedantechpvt.com/api/prayerrequest",
      formData
    );
    return response;
  } catch (error) { }
};


export const getStudyMaterials = () => async () => {
  try {
    const response = await api.get(
      "https://church.saeedantechpvt.com/api/studymaterial"
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const PostStudy = (formData) => async () => {
  try {
    const response = await api.post(
      "https://church.saeedantechpvt.com/api/studymaterialsquestions",
      formData
    );
    return response;
  } catch (error) { }
};

export const getlastEvents = () => async () => {
  try {
    const response = await api.get(
      "https://church.saeedantechpvt.com/api/event"
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getMinistry = () => async () => {
  try {
    const response = await api.get(
      "https://church.saeedantechpvt.com/api/ministry"
    );
    return response
  } catch (error) {
    throw error
  }
}

export const getSermons = () => async () => {
  try {
    const response = await api.get(
      "https://church.saeedantechpvt.com/api/sermons/getAll"
    );
    return response
  } catch (error) {
    throw error
  }
}
export const getAllInspirationMessages = () => async () => {
  try {
    const response = await api.get(
      "https://church.saeedantechpvt.com/api/message"
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const postEventRegistration = (formData) => async () => {
  try {
    const response = await api.post(
      "https://church.saeedantechpvt.com/api/eventregistrations",
      formData
    );
    return response;
  } catch (error) { }
};

export const getPators = () => async () => {
  try {
    const response = await api.get(
      "https://church.saeedantechpvt.com/api/church/pastors"
    );
    return response;
  } catch (error) {
    throw error;
  }
};
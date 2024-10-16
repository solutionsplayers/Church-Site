import axios from "axios";


const api = axios.create({
    // baseURL: import.meta.env.VITE_REACT_APP_URL,
});

const getToken = () => {
    return localStorage.getItem('token');
};

api.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer 2|kJeTJ0kIOJhly30kxIixe9F904ESQVuZ7gtTce6wca99831c`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const prayRequest = (formData) => async (dispatch) => {
    try {
        const res = await api.post('api/prayerrequest', formData)
        return res
    }
    catch (err) {
        throw err
    }
}

export const getPrayRequest = () => async (dispatch) => {
    try {
        const token = getToken();
        const res = await axios.get(`https://church.saeedantechpvt.com/api/parayercategory`, {
            headers: {
                Authorization: `Bearer 2|kJeTJ0kIOJhly30kxIixe9F904ESQVuZ7gtTce6wca99831c`,
            },
        });
        return res;
    } catch (error) {
        throw error;
    }
};






















// export const getJobs = () => async (dispatch) => {
//     try {
//         const res = await api.get('api/jobPost')
//         return res
//     }
//     catch (err) {
//         throw err
//     }
// }
// export const addJob = (formData) => async (dispatch) => {
//     try {
//         const res = await api.post('api/jobPost', formData)
//         return res
//     }
//     catch (err) {
//         throw err
//     }
// }
// export const updateJob = (id, formValues) => async (dispatch) => {
//     try {
//         const res = await api.put(`api/jobPost/${id}?job_type=${formValues.type}&job_title=${formValues.title}&
//       job_description=${formValues.desc}&job_requirements=${formValues.req}&job_location=${formValues.loc}`)
//         return res
//     }
//     catch (err) {
//         throw err
//     }
// }
// export const deleteJob = (id) => async (dispatch) => {
//     try {
//         const res = await api.delete(`api/jobPost/${id}`)
//         return res
//     }
//     catch (err) {
//         throw err
//     }
// }


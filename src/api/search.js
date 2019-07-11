import axios from 'axios';

const URL = process.env.API_URL;

export default {
  repositories: param => {
    return axios.get(
      `${URL}search/repositories?q=${param}&sort=stars&order=desc`,
    );
  },
};

const axios = require('axios');

class MoviePlugin {
  async getMovies(page) {
    const response = await axios.get(`https://ww19.0123movie.net/api/movies?page=${page}`);
    return response.data;
  }

  async getTVSeries(page) {
    const response = await axios.get(`https://ww19.0123movie.net/api/tv-series?page=${page}`);
    return response.data;
  }

  async getVideoURL(url) {
    const response = await axios.get(url);
    return response.data;
  }
}

module.exports = MoviePlugin;

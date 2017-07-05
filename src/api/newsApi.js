import axios from 'axios'

const id = "81b70ec67d234b338e49cdd2bac50925"

const handleError = error => {
  console.warn(error)
  return null
}

const Api = {
  getArticles: function (source) {
    const params = "?articles" + source + "&apiKey=" + id
    return axios.get(`https://newsapi.org/v1/${params}`)
      .then(response => {
        console.log(JSON.parse(response))
      })
      .catch(handleError)
  },
  getSources: function () {
    const params = "sources?language=en&apiKey=" + id
    return axios.get(`https://newsapi.org/v1/${params}`)
      .then(response => {
        const sources = response.data.sources
        return sources
      })
      .catch(handleError)
  }
}

export default Api;

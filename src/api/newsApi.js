import axios from 'axios'

const id = "81b70ec67d234b338e49cdd2bac50925"

const handleError = error => {
  console.warn(error)
  return null
}

const Api = {
  getArticles: function (source) {
    const params = "articles?source=" + source + "&apiKey=" + id
    return axios.get(`https://newsapi.org/v1/${params}`)
      .then(response => {
        return response.data.articles
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
  },
  getHomePageArticles: function (first, second, third) {
    const paramsFirst = "articles?source=" + first + "&sortBy=top&apiKey=" + id
    const paramsSecond = "articles?source=" + second + "&sortBy=top&apiKey=" + id
    const paramsThird = "articles?source=" + third + "&sortBy=top&apiKey=" + id
    return axios.all([
      axios.get(`https://newsapi.org/v1/${paramsFirst}`),
      axios.get(`https://newsapi.org/v1/${paramsSecond}`),
      axios.get(`https://newsapi.org/v1/${paramsThird}`)
    ])
    .then(axios.spread((first, second, third) => {
      const articles = {
        first: first.data,
        second: second.data,
        third: third.data
      }
      return articles
    }))
    .catch(handleError)
  }
}

export default Api;

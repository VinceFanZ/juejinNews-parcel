import qs from 'qs'
import axios from 'axios'

export default function axiosConfig () {
  axios
    .interceptors
    .request
    .use((config) => {
      const newConfig = config
      // CORS requests sending with cookie is allowed.
      newConfig.withCredentials = true
      // Do something before request is sent. Data in post requests will be
      // transformed to application/x-www-form-urlencoded format if it's object-typed.
      // DedeCMS.
      if (config.method === 'post' && typeof config.data === 'object') {
        newConfig.data = qs.stringify(config.data)
      }

      return newConfig
    })
}

import axios from 'axios'

export default {
  /**
   * 热门数据
   * @param {string} category
   * @returns {object | *}
   */
  getRankData (category) {
    return axios
      .get('/v1/get_entry_by_rank', {
        params: {
          src: 'web',
          limit: 20,
          type: 'post',
          category: category || 'all',
        },
      })
      .then((response) => {
        const resData = response.data
        if (resData && resData.s === 1) {
          return Promise.resolve(resData.d)
        }
        return Promise.reject(resData.m)
      })
      .catch((error) => {
        const msg = typeof error === 'object' || !error ? '服务器炸了，请稍后再看 ~|~' : error
        throw msg
      })
  },

  /**
   * 最新数据
   * @param {string} category
   * @returns {object | *}
   */
  getTimelineData (category) {
    return axios
      .get('/v1/get_entry_by_timeline', {
        params: {
          src: 'web',
          limit: 20,
          type: 'post',
          category: category || 'all',
        },
      })
      .then((response) => {
        const resData = response.data
        if (resData && resData.s === 1) {
          return Promise.resolve(resData.d)
        }
        return Promise.reject(resData.m)
      })
      .catch((error) => {
        const msg = typeof error === 'object' || !error ? '服务器炸了，请稍后再看 ~|~' : error
        throw msg
      })
  },
}

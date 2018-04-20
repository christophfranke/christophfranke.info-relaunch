const data = require('./apollo/data.json')

module.exports = {
  generate: {
  	routes() {
      return Object.keys(data.routes)
    }
  },
  loading: false,
}

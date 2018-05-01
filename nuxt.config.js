const data = require('./apollo/data.json')

module.exports = {
  generate: {
  	routes() {
      return Object.keys(data.routes)
    }
  },
  loading: false,
  head: {
  	titleTemplate: 'Christoph Franke - %s',
  	link: [
  		{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
  		{ rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
  		{ rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
  		{ rel: "manifest", href: "/site.webmanifest" }
  	],
  	meta: [
  		{ name: "msapplication-TileColor", content: "#272727" },
  		{ name: "theme-color", content: "#ffffff" }
  	]
  }
}

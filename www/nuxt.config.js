module.exports = {
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  generate: {
  	routes: (ctx) => {
  		return [
	  		'/emerged-agency-relaunch',
	  	]
	  }
  }
}

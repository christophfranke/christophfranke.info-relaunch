module.exports = {
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  // generate: {
  // 	routes: (ctx) => {
  //     console.log(ctx)
  // 		return [
  //       '/',
	 //  	]
	 //  }
  // },
  loading: false,
}

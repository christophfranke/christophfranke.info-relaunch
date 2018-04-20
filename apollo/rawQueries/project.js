module.exports = `query project($slug: String!) {
	project: Project(slug: $slug) {
	  isPublished
	  title
	  releaseDate
	  projectURL
	  categories {
	  	tagName
	  	slug
	  }
	  client
	  media {
	    sort
	    handle
	  }
	  features(filter: {isPublished: true}) {
	    title
	    description
	  }
	  callToActions {
	  	text
	  	url
	  	internalLink
	  }
	}
}`
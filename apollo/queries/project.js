module.exports = `query project($slug: String!) {
	project: Project(slug: $slug) {
	  isPublished
	  title
	  releaseDate
	  projectURL
	  slug
	  categories {
	  	title
	  	tagName
	  	slug
	  }
	  client
	  media(orderBy: sort_ASC) {
	    handle
	    previewColor
	  }
	  features(orderBy: sort_ASC) {
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

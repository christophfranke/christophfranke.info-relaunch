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
	  media {
	    sort
	    handle
	    previewColor
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

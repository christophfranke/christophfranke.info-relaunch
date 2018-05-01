module.exports = `query page($slug: String!) {
	page: Page(slug: $slug) {
	  isPublished
	  title
	  text
	  slug
	  header {
	  	image {
	  		handle
	  		previewColor
	  	}
	  	text
	  	colorTheme
	  	callToAction {
	  		text
	  		url
	  		internalLink
	  	}
	  }
	  media {
	  	id
	    handle
	    previewColor
	  }
	  callToActions {
	  	text
	  	url
	  	internalLink
	  }
	  features {
	    title
	    description
	    link
	    icon {
	    	handle
	    }
	  }
	}
}`

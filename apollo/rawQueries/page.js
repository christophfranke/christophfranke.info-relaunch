module.exports = `query page($slug: String!) {
	page: Page(slug: $slug) {
	  isPublished
	  title
	  text
	  header {
	  	image {
	  		handle
	  		previewColor
	  	}
	  	text
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

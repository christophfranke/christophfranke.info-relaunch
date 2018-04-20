module.exports = `query category($slug: String!) {
	category: Category(slug: $slug) {
		title
		slug
		projects {
		  title
		  slug
		  media {
		    sort
		    handle
		    previewColor
		  }
		  categories {
		  	tagName
		  	slug
		  }
		}
	}
}`

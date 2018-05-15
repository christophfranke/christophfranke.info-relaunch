module.exports = `query category($slug: String!) {
	category: Category(slug: $slug) {
		title
		slug
		projects {
		  title
		  slug
		  media(orderBy: sort_ASC) {
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

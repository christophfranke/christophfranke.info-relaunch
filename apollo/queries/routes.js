module.exports = `query Routes {
  projects: allProjects {
  	title
    slug
  }
  categories: allCategories {
  	title
    slug
  }
  pages: allPages {
  	title
    slug
  }
}`

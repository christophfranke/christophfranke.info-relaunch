module.exports = `query Routes {
  projects: allProjects {
    slug
  }
  categories: allCategories {
    slug
  }
  pages: allPages {
    slug
  }
}`

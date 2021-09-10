import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsData} = props

  return (
    <div className="blog-list">
      {blogsData.map(eachBlogItem => (
        <BlogItem key={eachBlogItem.id} blogDetails={eachBlogItem} />
      ))}
      <hr />
    </div>
  )
}
export default BlogList

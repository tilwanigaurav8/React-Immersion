import { Link } from "react-router-dom";

const BlogList = ({ blogs, title}) => {
    // used when parametr is props
    //const blogs=props.blogs;
    //const title=props.title;
    //const handledel=props.handledel;
    
    return (
      <div className="st-list">
      {blogs.map(blog => (
        <div className="s-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p> { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
    );
  }
   
  export default BlogList;
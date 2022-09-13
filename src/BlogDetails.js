import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, isError, isPending} = useFetch('http://localhost:8000/blogs/' + id)
    
    return ( 
        <div className="blog-details">
          {isPending && <div>..loading</div>}
          {isError && <div>{isError}</div>}
          {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
            </article>
          )}
        </div>
     );
}
 
export default BlogDetails;

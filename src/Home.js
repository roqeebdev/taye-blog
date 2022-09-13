import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const{data : blogs, isPending, isError} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="home">   
          {isPending &&  <div>Loading..</div>}
          {isError && <div>{isError}</div>}
          {blogs && <BlogList blogs={blogs} title= "All blogs!"/>}
        </div>
     );
}
 
export default Home;
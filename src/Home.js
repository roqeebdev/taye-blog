import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'tayealabi', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'aramide', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'tayealabi', id: 3 }
      ])

    const handleDelete = (id)=> {
        console.log(id);
      const newBlogs =   blogs.filter((blog) => blog.id !== id);
      setBlogs(newBlogs);
    }

    return ( 
        <div className="home">   
                <BlogList blogs={blogs} title= "All blogs;" handleDelete = {handleDelete}/>
                {/* <BlogList blogs={blogs.filter((blog)=> blog.author === "tayealabi")} title= "Tayealabi's Blog" /> */}
        </div>
     );
}
 
export default Home;
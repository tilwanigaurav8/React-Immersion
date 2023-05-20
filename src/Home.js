import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All the blogs"/> }
    </div>
  );
  /*
    const [name,setName]=useState('Gaurav');
    /*
    const handleDelete = (id) => {
      const newData = data.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }
      */
      /* useEffect is called after every render by default
      useEffect(()=>{
        console.log("Hello");
        console.log(blogs);
      });*/
      //[] as a second parameter ensures that the useEffect executes only initially at first render
      /*useEffect(()=>{
        console.log("Hello");
        console.log(name);
      },[name]); //[] is dependency array*/
      /* if setTimeOut not used
      useEffect(() => {
        fetch('http://localhost:8000/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            setisPending(false);
          })
      }, [])*/
      /*
    /*
      return (
        <div className="home">
          {error && <div>{error}</div>}
          {isPending && <div>Loading the data....</div>}
          {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
        </div>
      ); 
      */
};
     
export default Home;
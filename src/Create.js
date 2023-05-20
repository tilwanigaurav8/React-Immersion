import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create=()=>{
    const [title,settitle]=useState('');
    const [body,setbody]=useState('');
    const [author,setauthor]=useState('BCE');
    const [isPending,setIsPending]=useState('false');
    const history=useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log("New Blog Added");
            setIsPending(false);
            history.push('/');
        })
        
    }

    return(
        <div className="create">
            <h2>Add a New Student</h2>
            <form onSubmit={handleSubmit}>
                <label>Student Name</label>
                <input type="text" required value={title} onChange={(e)=> settitle(e.target.value)}/>

                <label>Domain</label>
                <textarea required value={body} onChange={(e)=>setbody(e.target.value)}>

                </textarea>

                <label>Branch</label>
                <select value={author} onChange={(e)=>setauthor(e.target.value)}>
                    <option value="BCE">BCE</option>
                    <option value="BAI">BAI</option>
                    <option value="BCG">BCG</option>
                    <option value="BCY">BCY</option>
                </select>
                <button>Add Student</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}
export default Create;
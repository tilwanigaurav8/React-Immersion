import { useState } from "react";
import { useHistory } from "react-router-dom";
const Dels=({id})=>{
    const [p,setp]=useState('');
    const hist=useHistory();
    const del=(e)=>{
        e.preventDefault();
        if(p==="1234"){
            fetch('http://localhost:8000/blogs/'+id,{method:"DELETE"})
            .then(()=>{
                hist.push('/');
            })
        }
        else{
            hist.push('/');
        }
    }
    return(
    <div className="create">
        <form onSubmit={del}>
                <label>password</label>
                <input type="password" required value={p} onChange={(e)=> setp(e.target.value)}/>
                <button>Modify</button>
        </form>
    </div>);
}
export default Dels;
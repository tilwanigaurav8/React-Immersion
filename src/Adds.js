import { useState } from "react";
import { useHistory } from "react-router-dom";
const Adds=()=>{
    const [p,setp]=useState('');
    const hist=useHistory();
    const add=(e)=>{
        e.preventDefault();
        if(p==="1234"){
            hist.push('/create');
        }
        else{
            hist.push('/');
        }
    }
    return(
    <div className="create">
        <form onSubmit={add}>
                <label>password</label>
                <input type="password" required value={p} onChange={(e)=> setp(e.target.value)}/>
                <button>Modify</button>
        </form>
    </div>);
}
export default Adds;
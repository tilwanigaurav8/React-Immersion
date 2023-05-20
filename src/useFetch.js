import { useEffect,useState } from 'react';
const useFetch=(url)=>{
    const [data, setdata] = useState(null);
    const [isPending,setisPending]=useState(true);
    const [error,seterror]=useState(null);
    useEffect(()=>{
      const abortCont=new AbortController();
        setTimeout(()=>{
          fetch(url,{signal:abortCont.signal})
          .then(res => {
            if(!res.ok){
              throw Error('Facing Problem With Server');
            }
            return res.json();
          })
          .then(data => {
            setdata(data);
            setisPending(false);
            seterror(null);
          })
          .catch((err)=>{
            if(err.name==="AbortError"){
              console.log('Fetch Aborted')
            }
            else{
              setisPending(false);
              seterror(err.message);
            }
          })
        },1000)
        return ()=>abortCont.abort();
      },[url]);
      return {data,isPending,error};
}
export default useFetch;
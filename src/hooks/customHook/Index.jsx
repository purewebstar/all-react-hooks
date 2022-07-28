import React, {useState, useEffect} from 'react';         
// custom hook           
const useFetch = (url) =>{
 const[data, setData] = useState(null);           

 useEffect(() =>{
   fetch(url)
   .then((res)=> res.json())
   .then((data)=> setData(data));
 },[url]);

 return [data];
}
const CustomHook = () =>{   
    const [data] = useFetch('your_url');
    
    return(
      <>
      {data&&data.map((d, i) => {          
        return <p key={i}>{d}</p>
      })
      }                      
      </>
    );
};

export default CustomHook;
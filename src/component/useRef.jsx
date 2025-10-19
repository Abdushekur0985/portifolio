
import { useRef, useState } from "react";

const Reference=()=>{

    const [data, setdata]=useState([]);
    // declaring state
    const [count,setcount]=useState(0);
// update condition
    const increase=()=>setcount(count+1);
    const decrease=()=>setcount(count-1);
    const reset=()=>setcount(0);

    const inputRef=useRef(null);
    const countRef=useRef(0)
    const handleClick=()=>{

        countRef.current++;
        console.log("submit button clicked",countRef.current)
    }
    return(
        <div>
            <div>
            <input ref={inputRef} type="text" placeholder="enter your name"/>
            {/*  */}
            <div style={{textAlign:"center",marginTop:"50px"}}>
                <h1>count:{count}</h1>
                <button onClick={increase}>increase</button>
                <button onClick={decrease}>decrease</button>
                <button onClick={reset}>reset</button>
            </div>

            {/*  */}
            <button type="submit" onClick={()=>{console.log(inputRef.current.value)}}>submit</button>
            </div>
            {/* tracking click event  */}
            <button onClick={handleClick}>Click me!</button>;
            <button onClick={()=>{setdata([...data,inputRef.current.value])}}>display current value</button>
            {data.map((item,index)=>{return <h3 key={index} >{item}</h3>})}
          
            <div>

            </div>
        </div>
    )
}

export default Reference;

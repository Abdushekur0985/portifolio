
import { useState,useEffect} from "react";

function Example(){
    const [count,setcount]=useState(0);
    useEffect(()=>{
        console.log("this is useEffect...");
        console.log(`this is ${count}`);
    },[count]);

    // timer 
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      console.log("Timer started...");
  
      const timer = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 100);
  
      // 🧹 Cleanup function
      return () => {
        console.log("Timer stopped!");
        clearInterval(timer);
      };
    }, []);
    return (
        <div>
             <h1>Hello, useEffect!</h1>
             <h1>{count}</h1>
             <button onClick={()=>setcount(count +1)}>increase</button>
             <button onClick={()=>setcount(count -1)}>decerease</button>
             <h1>Time: {seconds}s</h1>;
        </div>
    )

}

export default Example;
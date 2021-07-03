import React,{useState, useEffect} from 'react';

export default function UseEffectComponent() {
    
    const [val, setval] = useState(1)

    useEffect(()=>{
      const timer = window.setInterval(() => {
            setval(v => v + 1);

        }, 1000)
        
        return () => window.clearInterval(timer);

    },[]);


    return (
        <div>
            {val}
        </div>
    )
}

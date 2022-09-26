import { useRef, useState } from 'react'

const useCountdown = (fromTime: number) => {

    const [time, setTime] = useState<number>(fromTime);
    const timerId = useRef<any>(null);

    const start = ()=>{
      if(timerId.current){
        timerId.current = setInterval(()=>{
          setTime((prev)=>{
             if(prev <= 0){
              clearInterval(timerId.current);
              return 0;
             }else{
              return prev-1;
             }
          })
        },1000)
      }   
    }
    const pause = ()=>{
        clearInterval(timerId.current);
        timerId.current = null;
    }
    const reset = ()=>{
        clearInterval(timerId.current);
        timerId.current = null;
        setTime(fromTime);
    };
    
  return {time, start, pause, reset}
}

export default useCountdown;

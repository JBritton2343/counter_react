import React from "react";


const Counter =()=>{

    const [time, setTime] = React.useState(0);
    const [timerOn, setTimerOn] = React.useState(false);

    React.useEffect(()=>{

        let interval = null;

        if (timerOn){

            interval = setInterval(()=>{
                setTime(prevTime => prevTime + 1)
            }, 1000)

        }
        else {
            clearInterval(interval)

        };

        return ()=>clearInterval(interval);


    }, [timerOn]);

   
    const startStyle={
        color:'green',
        text: 'white'
    }
    const stopStyle={
        color:'Red',
        text: 'white'
    }
    const resetStyle={
        color: "gold",
        text: 'silver'
    }
    const resumeStyle={
        color: "blue",
        text: 'yellow'
    }
    const secndStyle={
        width: "lg",
        height: "xl",
        fontSize: "40px"
    }
   

    return(
        <div>
           <div className="Second" style ={secndStyle}> <i className="fa-solid fa-clock" />{time}</div>
                
                <div>
                    <button onClick={()=>setTimerOn(true)} style={startStyle}>Start</button>
                    <button onClick={()=>setTimerOn(false)} style={stopStyle}>Stop</button>
                    <button onClick={()=>setTimerOn(true)} style={resumeStyle}>Resume</button>
                    <button onClick={()=>setTime(0)} style={resetStyle}>Restart</button>
                </div>

            
        </div>

    );
    
    }
    export default Counter;
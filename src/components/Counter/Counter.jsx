import React from "react";


const Counter =()=>{

    const [time, setTime] = React.useState(0);
    const [timerOn, setTimerOn] = React.useState(false);

    React.useEffect=(()=>{

        let interval = null;

        if (timerOn){

            interval = setInterval(()=>{
                setTime(prevTime => prevTime + 10)
            }, 10)

        }
        else {
            clearInterval(interval)

        };

        return ()=>clearInterval(interval);


    }, [timerOn]);

    const milisecndStyleObj={
        width: '350px',
        height: '280px'
    }
    const iconStyleObj={
        width:'350px',
        height: '280px'
    }
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
        test: 'yellow'
    }
   

    return(
        <div className="Counter">
            <i className="fa-solid fa-clock" style={iconStyleObj} /><div className="Milisecnd" style={milisecndStyleObj}>{time}</div>
                
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
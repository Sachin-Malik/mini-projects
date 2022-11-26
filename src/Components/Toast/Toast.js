import React,{useState}from 'react';
import './Toast.css'

function Toast(){

   const [xPosition,setxPosition]=useState('left');
   const [yPosition,setyPosition]=useState('top');
   const [toastType,setToastType]=useState('success');
   const [toastVisibility,setToastVisibility]=useState(0);
   
      
   var toastTypeToColorMapper = {
    error:'#b30000',
    info:'#FFFDD0',
    success:'#65A765',
    }

   const toastStyle = {
        xPosition:'absolute',
        left:xPosition==='left'?'0%':null,
        right:xPosition==='right'?'0%':null,
        bottom:yPosition==='bottom'?'0%':null,
        top:yPosition==='top'?'0%':null,
        display: !toastVisibility?'none':'',
        backgroundColor:`${toastTypeToColorMapper[toastType]}`,
    }

    const handleToastTypeChange = (event) => {
       setToastVisibility(0);
       setToastType(event.target.value);
    }

    const handleyPositionChange = (event) => {
        setToastVisibility(0);
        setyPosition(event.target.value);
    }

    const handlexPositionChange = (event) => {
        setToastVisibility(0);
        setxPosition(event.target.value);
    }
 

    const showToastClicked = () => {
        setToastVisibility(1);
        setTimeout(()=>{
          setToastVisibility(0);
        },2000);
    }

    return (
        <div >
           <div id='toast' style={toastStyle}>
                Toast Message # order Confirmed
           </div>
          <div className='container'>
                <h1>Toast Message</h1>
                <p>Play with below options to see toast at different edges of screen</p>
            <div>
            <label>Select X position</label>
            <select className='dropdown' onChange={handlexPositionChange} value={xPosition}>
                <option value={'right'}>Right</option>
                <option value={'left'}>Left</option>
            </select>
            </div>

           <div>
           <label>Select Y position</label>
            <select className='dropdown' onChange={handleyPositionChange} value={yPosition}>
                <option value={'top'}>Top</option>
                <option value={'bottom'}>Bottom</option>
            </select>
           </div>

           <div>
            <label>Type for the Toast</label>
             <select onChange={handleToastTypeChange} value={toastType} className='dropdown'>
                <option value={'success'}>Success</option>
                <option value={'error'}>Error</option>
                <option value={'info'}>Info</option>
             </select>
           </div>
           <button onClick={showToastClicked} className="mybutton">Show Toast</button>
        </div>
        
        </div>

    )
}

export default Toast;
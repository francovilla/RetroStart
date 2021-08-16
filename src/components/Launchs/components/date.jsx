import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";




function Date(params) {
  const [data, setData] = useState('Loading...')
  
  useEffect(()=>{
    
    
    const interval = setInterval(() => {
      setData(moment(moment.unix(1628697452)).fromNow())
    }, 1000);
    return () => clearInterval(interval);
  },[data])

  return(<p style={{
    marginLeft: 'auto', 
    color: data.toString().substring(0,2) === 'in'? 'yellow': 'white',
    textShadow: data.toString().substring(0,2) === 'in'? '#EEEE00 0 0 10px': '',
  }}>{(data)}</p>)
}

export default Date;
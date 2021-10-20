import { useState, useEffect } from "react";

const useService = ()=> {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
      // debugger
      fetch("/Services.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);
    // console.log(services)

    return [services];
}
export default useService;
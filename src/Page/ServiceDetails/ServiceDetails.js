import React, {useState, useEffect}from 'react'
import {useParams} from "react-router-dom";
import useService from '../../Hooks/useServices/useService';
const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [services] = useService();
    const [singleData, setSingleData] = useState([]);

    useEffect(()=> {
        const serviceItem = services.find(service => service.id === serviceId);
        setSingleData(serviceItem)
    }, [services])
    console.log(singleData)
    return (
        <div>
            <h3>Id Number: {serviceId}</h3>
        </div>
    )
}

export default ServiceDetails

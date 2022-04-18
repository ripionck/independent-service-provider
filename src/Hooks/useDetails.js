import { useEffect, useState } from "react"

const useDetails = () => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('fakeDb.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);
    return [details, setDetails]
}

export default useDetails;
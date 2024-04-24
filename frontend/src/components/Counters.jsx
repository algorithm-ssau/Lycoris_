import React, {useState} from "react";
import '../styles/style.css';

const Counters = () => {
    const [data, setData] = useState(0);

    return (
        <div>
            <h1>L = {data}</h1>

            <button onClick={()=> setData(data+ 1)}>Inc</button>
            <button onClick={()=> setData(data- 1)}>Dec</button>
        </div>
    );
}

export default Counters;
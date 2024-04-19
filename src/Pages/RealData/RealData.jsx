import { useEffect, useState } from "react";
import RealDataComp from "./RealDataComp";


const RealData = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json();
                setUsers(data);

            }catch(error){
                console.log(error);
            }
        };
        fetchData();
    },[])
    return (
        <div>
            {
                users.map(user => (
                    <RealDataComp key={user.id} user={user}/>
                ))
            }
        </div>

    );
};

export default RealData;

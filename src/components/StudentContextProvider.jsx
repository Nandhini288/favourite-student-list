import { React, createContext, useState } from 'react'

const StudentContext = createContext()

function StudentContextProvider (data) {

    const [Student, setStudent] = useState([{id:1,name:"Bhrath",fav:false}, {id:2,name:"Praveen",fav:false}, {id:3,name:"Kumar",fav:false}, 
        {id:4,name:"Ramya",fav:false}, {id:5,name:"Monica",fav:false}, {id:6,name:"Priya",fav:false}]);

    return (
        <StudentContext.Provider value={{ Student, setStudent }}>
            {data.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider;
export { StudentContext };
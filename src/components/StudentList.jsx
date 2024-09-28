import { StudentContext } from './StudentContextProvider';
import { useContext, useState } from 'react';

const StudentList = () => {

    const { Student, setStudent } = useContext(StudentContext)
    const [sName, setSname] = useState("")

    function addFav(id, fav) {
        setStudent(prearray =>
            prearray.map(array =>
                array.id === id ? { ...array, fav: !fav } : array
            )
        );
    }

    function input(e) {
        setSname(e.target.value)
    }

    function AddStudents() {
        setStudent([...Student, { id: Student.length + 1, name: sName, fav: false }])
        setSname("")
    }

    return (
        <div className='text-center'>
            <h1 className='font-bold text-2xl underline text-center m-3'>Add Students Name</h1>
                <input value={sName} className='w-80 bg-slate-300 rounded-md p-2'
                    onChange={input} placeholder='Enter The Name'></input>
                <button className='bg-slate-500 text-white rounded-md ml-2 p-2 font-bold'
                    onClick={AddStudents}>ADD</button>
            <ul className='m-5 md:px-40 items-center'>
                <h1 className='font-bold text-2xl underline text-center m-3'>List of Students</h1>
                {Student.map((item, index) => {
                    return <li className='flex w-50 p-1 items-center justify-between' key={index}>
                        <h2 className='text-lg p-2'>{item.id}. {item.name}</h2>
                        <button className='ml-10 h-fit p-1 bg-black disabled:opacity-50 text-white rounded-md hover:cursor-pointer hover:disabled:cursor-not-allowed'
                            onClick={() => addFav(item.id, item.fav)} disabled={item.fav}>Add To Favourite</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default StudentList;
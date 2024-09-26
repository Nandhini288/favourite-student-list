import { StudentContext } from './StudentContextProvider';
import { useContext } from 'react';


const StudentList = () => {
   
    const { Student, setStudent } = useContext(StudentContext)

    function addFav(id,fav){
        setStudent(prearray =>
            prearray.map(array =>
              array.id === id ? { ...array, fav: !fav } : array
            )
          );
    }

    return (
        <div className='w-80'>  
         <ul className='m-5'>
         <h1 className='font-bold text-2xl underline text-center mb-3'>List of Students</h1>
            {Student.map((item, index) => {
                return <li className='flex w-50 p-1 items-center justify-between' key={index}>
                    <h2 className='text-lg p-2'>{item.id}. {item.name}</h2>
                    <button className='ml-10 h-fit p-1 bg-black disabled:opacity-50 text-white rounded-md hover:cursor-pointer hover:disabled:cursor-not-allowed'
                    onClick={()=>addFav(item.id, item.fav)} disabled={item.fav}>Add To Favourite</button>
                </li>
            })}
        </ul>
        </div>
    )
}

export default StudentList;

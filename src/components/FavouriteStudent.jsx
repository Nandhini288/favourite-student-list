import { StudentContext } from './StudentContextProvider';
import { useContext } from 'react';

const FavouriteStudent = () => {

    const { Student, setStudent } = useContext(StudentContext)

    const favStudent = Student.filter(item => item.fav);

    const star = <img style={{width:15, height:15}} alt='star' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZtJREFUSEu11T1oFkEQxvFf8KMStDBqKQQJNtrYBCKIomIULNROFAULu3RCtFUsraxsVLQUokgIaCAoqSwSG7USS7URQrQwfuzACsfl3nv35M3CcXd7s/PfmWdmb8g6j6F19q8LYCNe4DeOYbVkc10A5/EwO43nR4MGLGFfdvoW+wcJOIyXNYeHMN8PUpqi55ioOXuK04MAjOIdawriT9JkBB/bINUIjuAkduRrZ74PY0MPJ7/wFV/wuXKPiOdiTRWwjC39Qi78HrBddcDVtOO7hQ7azCJ1l3C/Doj3y7jXkO9S7necxcy/BU1VdA6PEZ3bZYQW0eGL1UW9yvQEprGpkPABx1NqPtXt2/og9AhdSsZBvG4ybAMsYKzEezr4bqRob3YBRP5/dNAhdh9RrBm9IhjHq8Ldh1k03FaslGpwDbcbAHfy3GTDtzPptH1SCniGUxXjOIsupLk3ee5ALuU9FZvonyulgKjp7fiZxbuVn6vrN2MqzV/PWkWJ7i4FzGJbOikv4n0fLfbiAb7haCmgg77tpqU/nP8G/gU/zz8ZHLjd4wAAAABJRU5ErkJggg=="/>
    
    function removeFav(id, fav) {
        setStudent(prearray =>
            prearray.map(array =>
                array.id === id ? { ...array, fav: !fav } : array
            )
        );
    }

    return (
        <div className='m-5 w-80'>
             <ul className='m-5'>
              <h1 className='font-bold text-2xl underline text-center mb-3'>Favourite Students</h1>
            {favStudent.map((item, index) => (
                <li className='flex w-50 p-1 items-center justify-between' key={index}>
                    <div className='flex'>
                    <p className=' flex text-lg p-2 items-center mr-1'>{star}</p>
                    <h2 className=' flex text-lg p-2 items-center' key={index}>{item.name}</h2>
                    </div>
                    <button className='h-fit p-1 bg-red-600 text-white rounded-md hover:cursor-pointer '
                        onClick={() => removeFav(item.id, item.fav)}>Remove</button>
                </li>
            ))}
             </ul>
        </div>
        )
}

export default FavouriteStudent;
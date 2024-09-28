import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = (props) => {

    const navigate = useNavigate()
    const setSlist = props.setSList
    const setFlist = props.setFList

    function studentList() {
        setSlist(true)
        setFlist(false)
        navigate("/")
    }
    function favouriteList() {
        setFlist(true)
        setSlist(false)
        navigate("/favouritestudent")
    }

    return (
        <header className="w-full max-h-fit bg-rose-600 content-center flex ">
            <h1 className='text-white p-2 ml-5 text-xl cursor-pointer underline hover:text-yellow-400'
                onClick={studentList}>List of Students</h1>
            <h1 className='text-white p-2 ml-5 text-xl cursor-pointer underline hover:underline hover:text-yellow-400'
                onClick={favouriteList}>Favourite Students</h1>
        </header>
    )
}

export default Header
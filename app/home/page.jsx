"use client"
import { useEffect } from "react"
import { getUser } from "../redux/action/login"
import { useDispatch, useSelector } from "react-redux"

export default function Dashboard() {
    const dispatch = useDispatch()

    useEffect(() => {
        getdatauser()
    },[])
    
    const getdatauser = () => {
        dispatch(getUser())
    }
    
    const data = useSelector((state) => state.login.dataUser)
    return (
        <>
            <h1>{data.user_nama}</h1>
        </>
    )
}
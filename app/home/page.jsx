"use client"
import { useEffect } from "react"
import { getUser } from "../redux/action/login"
import { useDispatch, useSelector } from "react-redux"

export default function Dashboard() {
    const dispatch = useDispatch()

    const data = useSelector((state) => state.login.dataUser)
    useEffect(() => {
        getdatauser()
    },[])

    const getdatauser = () => {
        dispatch(getUser())
    }

    return (
        <>
            <h1>{data.nama}</h1>
        </>
    )
}
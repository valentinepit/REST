import {useLocation} from "react-router-dom"
import React from 'react'


const NotFound404 = () => {
    let {pathname} = useLocation()
    return (
        <div>
            <h3> No Page in {pathname} </h3>
        </div>
    )
}


export default NotFound404
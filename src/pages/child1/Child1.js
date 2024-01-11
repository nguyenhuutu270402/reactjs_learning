import React from 'react'
import { useParams } from 'react-router-dom';

function Child1() {
    let { value1 } = useParams();
    console.log(useParams())
    return (
        <div>{value1}</div>
    )
}
export default Child1
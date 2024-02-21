import React from 'react'

const CatagoryBar = () => {
    return (
        <ul class="nav justify-content-center catagory-bar my-3 ">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Political</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Business</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Tech</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">health</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Stocks</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Entertainment</a>
            </li>
        </ul>
    )
}

export default CatagoryBar

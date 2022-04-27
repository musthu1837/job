import React from 'react'
export default ({rating, maxRating}) => {
    let stars:any[] = [];
    for(let i = 0; i < rating; i++){
        stars.push(<i className="star icon yellow"></i>)
    }

    for(let i = rating; i < maxRating; i++){
        stars.push(<i className="star icon"></i>)
    }
    return <span>{stars}</span>
}

import React from 'react';
import _ from 'lodash';
import { faker } from '@faker-js/faker'
const Rating = ({rating, maxRating}) => {
    let stars:any[] = [];
    for(let i = 0; i < rating; i++){
        stars.push(<i className="star icon yellow"></i>)
    }

    for(let i = rating; i < maxRating; i++){
        stars.push(<i className="star icon"></i>)
    }
    return <span>{stars}</span>
}

const ReviewItem = (props) => {
    const { reviewer, review, reviewedOn, rating, logo, designation} = props;
    return (
        <article className="media block">
            <figure className="media-left">
                <p className="image is-64x64">
                <img src={logo}/>
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{ reviewer }</strong>   
                        <br/>
                        <small>{ designation }</small>                     
                        <br/>
                            { review }
                        <br/>
                        <small> <Rating rating={ rating } maxRating={5}/> · { reviewedOn }</small>
                        <span className="icon is-small">
                            <i className="fa-solid fa-star-sharp"></i>
                        </span>
                        
                    </p>
                </div>
            </div>
        </article>
    )
}

const Reviews = () => {
    return (
        <>
            <div className='block'>
                <div>
                    <progress className="progress is-primary" value="25" max="100"/>
                    <progress className="progress is-primary" value="15" max="100">15%</progress>
                    <progress className="progress is-primary" value="20" max="100">20%</progress>
                    <progress className="progress is-primary" value="25" max="100">25%</progress>
                    <progress className="progress is-primary" value="15" max="100">15%</progress>
                </div>
            </div>

            <ReviewItem
                logo={faker.image.avatar()}
                reviewer = {faker.name.findName()}
                review = {faker.lorem.paragraph()}
                reviewedOn = {'3 years ago'}
                rating = {5}
                designation = {'Student at ABC University'}
            />
            <ReviewItem
                logo={faker.image.avatar()}
                reviewer = {faker.name.findName()}
                review = {faker.lorem.paragraph()}
                reviewedOn = {'yesterday'}
                rating = {3}
                designation = {'Student at MIC'}
            />
            <ReviewItem
                logo={faker.image.avatar()}
                reviewer = {faker.name.findName()}
                review = {faker.lorem.paragraph()}
                reviewedOn = {'12 months ago'}
                rating = {2}
                designation = {'Student at RGUKT'}
            />
            
            <article className="media">
                <figure className="media-left">
                    <p className="image is-64x64">
                    <img src={faker.image.avatar()}/>
                    </p>
                </figure>
                <div className="media-content">
                    <div className="field">
                    <p className="control">
                        <textarea className="textarea" placeholder="Write a review..."></textarea>
                    </p>
                    </div>
                    <div className="field">
                    <p className="control">
                        <button className="button is-primary">Post review</button>
                    </p>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Reviews
import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

const filters = [
    {
        title: "Specific",
        filters: [
            { name: "All", value: "All"},
            { name: "Recommended", value: "RE"},
            { name: "Saved", value: "SA"},
            { name: "Applied", value: "AP"},
        ]
    },
    {
        title: "Department",
        filters: [
            { name: "Computer Science & Engineering", value: "CSE"},
            { name: "Electronics and Communication Engineering", value: "ECE"},
            { name: "Mechanical Engineering", value: "ME"},
            { name: "Electrical Engineering", value: "EEE"},
            { name: "Civil Engineering", value: "CIVIL"}
        ]
    },
    {
        title: "Role",
        filters: [
            { name: "Assistant Professor", value: "AP"},
            { name: "Professor", value: "P"},
            { name: "Lab Assistent", value: "LA"},
            { name: "Junior Lectuer", value: "JE"},
        ]
    },
    {
        title: "Salary",
        filters: [
            { name: "0-3 Lakhs", value: "0-3"},
            { name: "3-6 Lakhs", value: "3-6"},
            { name: "6-9 Lakhs", value: "6-9"},
            { name: "9-12 Lakhs", value: "9-12"},
        ]
    }
]
const JobItem = (props)=> {
    const { title, college, location, salary, experience, totalApplied } = props;
    return (
        <div className='block'>
            <div style={{minWidth: 270, maxWidth: 270}} className="card column">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-5">{ title }</p>
                        <p className="subtitle is-6">
                            <Link target={'_blank'} to={'/job/profile'}> 
                                <span className='has-text-primary'>{ college }</span>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="content">
                    <p>
                        Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magni
                    </p>
                    <div className="ui list">
                        <div className="item">
                            <div className="content right floated">
                                { location }
                            </div>
                            <div className='content'>
                                <i className="map marker alternate icon"/> Location
                            </div>
                        </div>
                        <div className="item">
                            <div className="content right floated">
                                { salary }
                            </div>
                            <div className='content'>
                                <i className="money bill alternate outline icon"/> Salary
                            </div>
                        </div>
                        <div className="item">
                            <div className='content right floated'>
                                { experience }
                            </div>
                            <div className="content">
                                <i className="code icon"/> Experience
                            </div>
                        </div>
                        <div className="item">
                            <div className='content right floated'>
                                { totalApplied }
                            </div>
                            <div className="content">
                                <i className="users icon"/> Applied
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item has-text-primary">
                        <b>Apply</b>
                    </a>
                    <a href="#" className="card-footer-item has-text-primary">
                        <b>Save</b>
                    </a>
                </footer>
            </div>
        </div>
    )
}

const Filter = (props) => {
    const { name, value } = props;
    return (
        <div className="item">
        <div className="ui checkbox">
            <input type="checkbox" name="example"/>
            <label>{ name }</label>
        </div>
        </div>
    )
}

const FilterItem = (props) => {
    const { title, filters} = props
    return (
        <>
            <div style={{marginTop: 20}} className='item'>
                <span className="content title is-6">
                    { title }
                </span>
            </div>

            {
             filters.map((filter , index) => {
                 return (
                     <Filter
                        key={index}
                        {...filter}
                     />
                 )
             })   
            }
        </>
    )
}

const Filters = (props) => {
    const { filters } = props
    return (
        <>
            {
                filters.map((filterItem, index) => {
                    return (
                        <FilterItem
                            key={index}
                            {...filterItem}
                        />
                    )
                })
            }
        </>
    )
}

export default () => {
    return (
    <div style={{marginTop: 30}}>
        <div className="ui grid">
            <div style={{maxWidth: 230, minWidth: 230}} className="column card is-hidden-mobile">
                <div className='ui list'>
                    <div className="item">
                        <span className='content right floated is-5'>
                            <i className="filter icon"/>
                        </span>
                        <span className="content title is-5">
                            Filters
                        </span>
                    </div>
                    <Filters
                        filters = {filters}
                    />

                </div>
            </div>
            <div className="column">
                <div className='ui grid'>
                    {
                        [1,2,3,4,5,6,7,8,9,10,11,12].map((value) => {
                            return <JobItem 
                                key={value}
                                title="Assitant Professor"
                                college="IIIT Bombay"
                                location="Mumbai"
                                salary="5-7 LPA"
                                experience="3-5 Years"
                                totalApplied={26}
                            />
                        }) 
                    }
                </div>
            </div>
        </div>
    </div>
    )
}
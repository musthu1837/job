import React from 'react';

const Profile = () => {
    return (
        <div style={{marginTop: 20}} className="card">
            <div className="card-image">
                <figure className="image is-3by1">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                    <img className='is-rounded' src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">React | React Native | Angular | Spring Boot | Full Stack Engineer at Google</p>
                </div>
                </div>

                <div className="content">
                    Hyderabad, Telangana, India.
                </div>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <div style={{marginTop: 20}} className="card">
            <div className='card-content'>
                <p className="title is-4">
                    About
                </p>
                <p className="subtitle is-6">
                    A full stack engineer, extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to come up with interesting ideas.
                </p>
            </div>

        </div>
    )
}


const EducationItem = (props) => {
    const { logo, title, subtitle, period, grade} = props
    return (
        <div className='block'>
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div>
                        <p className="title is-5">{ title }</p>
                        <p className="subtitle is-6">{ subtitle }</p>
                    </div>
                    <div>
                        <p className="is-6">{ period }</p>
                        <p className="is-6">Grade { grade }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Education = () => {
    return (
        <div style={{marginTop: 20}} className="card">
            <div className='card-content'>
                <p className="title is-4">
                    Education
                </p>
                <EducationItem 
                    logo=""
                    title="RGUKT Basar"
                    subtitle="Bachelor's degree, CSE"
                    period="2016 - 2020"
                    grade="8.7"
                />
                <EducationItem
                    logo=""
                    title="RGUKT Basar"
                    subtitle="PUC"
                    period="2014 - 2016"
                    grade="7.54"
                />
                <EducationItem
                    logo=""
                    title="S.P.S.M.C High school, Vijayawada"
                    subtitle="SSC"
                    period="2004 - 2014"
                    grade="9.5"
                />
            </div>
        </div>
    )   
}


const ExperienceItem = (props) => {
    const { logo, title, subtitle, period, place} = props
    return (
        <div className='block'>
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div>
                        <p className="title is-5">{ title }</p>
                        <p className="subtitle is-6">{ subtitle }</p>
                    </div>
                    <div>
                        <p className="is-6">{ period }</p>
                        <p className="is-6">{ place }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Experience = () => {
    return (
        <div style={{marginTop: 20}} className="card">
            <div className='card-content'>
                <p className="title is-4">
                    Experience
                </p>
                <ExperienceItem
                    logo=""
                    title="RGUKT Basar"
                    subtitle="Assitant Professor"
                    period="2020 - Present"
                    place="Telangana, Basar."
                />
            </div>
        </div>
    )   
}


export default () => {

    return <div>
        <Profile/>
        <About/>
        <Education/>
        <Experience/>
    </div>
}
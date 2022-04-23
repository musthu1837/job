import React from 'react';
const Actions = () => {
    return (
    <div style={{float: 'right'}}>
        <span className='icon is-small'>
            <i className="fa-solid fa-plus"></i>
        </span>
        {/* <span style={{marginLeft: 20}}className='icon is-small'>
            <i className="fa-solid fa-pencil"></i>
        </span> */}
    </div>
    )
}
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
                <p className="title is-4 has-text-primary">
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
                <p className="title is-4 has-text-primary">
                    Education
                    <Actions/>
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
                <p className="title is-4 has-text-primary">
                    Experience 
                    <Actions/>
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

const CertificationItem = (props) => {
    const { logo, title, subtitle, issued, credential} = props
    return (
        <div className='block'>
            <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                    <img src={logo} alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="media-content">
                    <div>
                        <p className="title is-5">{ title }</p>
                        <p className="subtitle is-6">{ subtitle }</p>
                    </div>
                    <div>
                        <p className="is-6">Issued { issued }</p>
                        <p className="is-6">Credential { credential }</p>
                        <button style={{marginTop: 10}} className="button is-outlined is-primary is-rounded">
                            <span>Show credential</span>
                            <span className="icon is-small">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Certifications = () => {
    return (
        <div style={{marginTop: 20}} className="card">
            <div className='card-content'>
                <p className="title is-4 has-text-primary">
                    Certifications & Publications
                    <Actions/>
                </p>
                <CertificationItem
                    logo="https://media-exp1.licdn.com/dms/image/C4D0BAQFQr9e68bBOPQ/company-logo_200_200/0/1626275253364?e=2147483647&v=beta&t=8MdoFbBWBgGX0-2lzYyhkgSsXi-QfhSTJElBKTUPC8g"
                    title="Modern React with Redux"
                    subtitle="Udemy"
                    issued="Mar 2021 - No Expiration Date"
                    credential="sdkljksjfk-sdfksldf-sdfksjd"
                />
                <CertificationItem
                    logo="https://media-exp1.licdn.com/dms/image/C4D0BAQFQr9e68bBOPQ/company-logo_200_200/0/1626275253364?e=2147483647&v=beta&t=8MdoFbBWBgGX0-2lzYyhkgSsXi-QfhSTJElBKTUPC8g"
                    title="React Native"
                    subtitle="Udemy"
                    issued="Mar 2021 - No Expiration Date"
                    credential="sdkljksjfk-sdfksldf-sdfksjd"
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
        <Certifications/>
    </div>
}
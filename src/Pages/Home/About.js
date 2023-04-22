import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="container mt-md-5" >
                <div className="row">
                    <div className="col-12 col-lg-6 ps-md-5">
                        <h2 className="my-3" style={{fontSize:'2.5rem'}}>Welcome to H&M Innovance LLp</h2>
                        <p>H&M Innovance LLP is an IT Solution Company. Here we will provide you with the best solutions according to your needs,
                             which will help you to increase your outreach and grow your business. You can look for the services we are providing,
                              like digital marketing, app development, web designing, and many more in our services section.
                        </p>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center col-lg-6">
                        <img className="img-fluid" src="assets/image/about1.gif" alt="Best Web Design and Devlopment Company In Gurgaon" style={{height:'280px'}}/>
                    </div>
                </div>
            </div>
        )
    }
}

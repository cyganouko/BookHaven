import React from 'react'

function AboutUs () {

    return (
        <React.Fragment>
            <div className="section-4">
                <div className="box-about">
                    <div className="row">
                        <div className="col-4 col-sm-4 col-md-4">
                            <div className="abt-top-border"> </div>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4">
                            <p className="abt-title text-center">ABOUT US</p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4">
                            <div className="abt-top-border"> </div>
                        </div>
                    </div>
                    <p className="abt-desc text-center">
                        BookHaven is a simple library catalog built to help <br/>
                        readers find what they're looking for and librarians <br/>
                        keep track of what's on the shelves.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )

}

export default AboutUs

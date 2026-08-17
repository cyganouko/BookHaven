import React from 'react';

function Navbar () {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
                <div className='container'>
                    <a className="navbar-brand nav-link" href="/">
                        <strong>BookHaven</strong>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav float-md-left">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#books">Catalog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;

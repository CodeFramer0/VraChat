import React, { Component } from 'react'



export default class Header extends Component {
  render() {
    return (
        <header className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">ВраЧат</a>
            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                <button type="button" className="btn btn-secondary menu-button" data-mdb-ripple-init>
                    <i className="fa-regular fa-circle-user avatar ms-auto fs-3" style={{ color:'black'}}></i>
                </button>

            </div>
        </div>
    </header>


    )
  }
}

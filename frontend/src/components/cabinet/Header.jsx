import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


const Header = () =>{
    return (
        <header className="navbar navbar-expand-lg sticky-top">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontawesome-6-pro@6.4.0/css/all.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/7.1.0/mdb.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
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
                {/* <button type="button" className="btn btn-secondary menu-button" data-mdb-ripple-init>
                    <i className="fa-regular fa-circle-user avatar ms-auto fs-3" style={{ color:'black'}}></i>
                </button> */}
                <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Меню
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/logout/">Выход из учетной записи</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </div>
        </div>
    </header>


    )
}

export {Header}
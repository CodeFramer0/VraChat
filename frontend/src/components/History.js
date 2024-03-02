import React, { Component } from 'react'




export default class History extends Component {
  render() {
    return (

        <nav id="sidebarMenu" className="col-2 collapse d-lg-block sidebar collapse">
            <div style={{ top:'10%' }} className="sticky-top">
                <div className="list-group list-group-flush mx-3 mt-4">
                    <h4 className="list-group-item py-2">
                        <center><span>Мои чаты</span></center>
                    </h4>
                    <a href="#" className="my-sidebar-block list-group-item list-group-item-action py-2 ripple">
                        <center><i className="fa-solid fa-circle-plus"></i> <b>Создать новый</b></center>
                    </a>
                    <hr className="hr hr-blurry" />
                    <a href="#" className="my-sidebar-block list-group-item list-group-item-action py-2 ripple active">
                        <i className="fa-regular fa-message fa-fw me-3"></i><span>11 фев 14:23</span>
                    </a>
                    <a href="#" className="my-sidebar-block list-group-item list-group-item-action py-2 ripple">
                        <i className="fa-regular fa-message fa-fw me-3"></i><span>11 фев 11:02</span>
                    </a>
                    <a href="#" className="my-sidebar-block list-group-item list-group-item-action py-2 ripple">
                        <i className="fa-regular fa-message fa-fw me-3"></i><span>11 фев 10:23</span>
                    </a>
                    <a href="#" className="my-sidebar-block list-group-item list-group-item-action py-2 ripple">
                        <i className="fa-regular fa-message fa-fw me-3"></i><span>10 фев 14:23</span>
                    </a>
                    <a href="#" className="my-sidebar-block list-group-item list-group-item-action py-2 ripple">
                        <i className="fa-regular fa-message fa-fw me-3"></i><span>10 фев 18:23</span>
                    </a>
                    <a href="#" className="my-sidebar-block list-group-item list-group-item-action py-2 ripple">
                        <i className="fa-regular fa-message fa-fw me-3"></i><span>10 фев 08:23</span>
                    </a>
                    <a href="#" className="my-sidebar-block list-group-item list-group-item-action py-2 ripple">
                        <i className="fa-regular fa-message fa-fw me-3"></i><span>9 фев 14:38</span>
                    </a>
                </div>
            </div>
        </nav>


    )
  }
}





import Chats from '../API/Chats'


const History = () =>{ 
    return (
        <nav id="sidebarMenu" className="col-2 collapse d-lg-block sidebar collapse">
            <div style={{ top:'10%' }} className="sticky-top">
                <div className="list-group list-group-flush mx-3 mt-4">
                    <h4 className="list-group-item py-2">
                        <center><span>Мои чаты</span></center>
                    </h4>
                    <form action="/create_chat/" method='POST'>
                    <button className="my-sidebar-block list-group-item list-group-item-action py-2 ripple">
                        <center><i className="fa-solid fa-circle-plus"></i> <b>Создать новый</b></center>
                    </button>
                    </form>
                    
                    <hr className="hr hr-blurry" />
                    <div>
                            <Chats/>
                    </div>
                </div>
            </div>
        </nav>


    )
  }





export {History}
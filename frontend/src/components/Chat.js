import React, { Component } from 'react'




export default class Chat extends Component {
  render() {
    return (
        <div className="d-flex">
        <main className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <section className="card mb-3">
                        <div className="card-header text-muted">Переписка 11 февраля 14:23
                        </div>
                        <div className="card-body">
                            <div className="card-text">
                                <div className="d-flex mb-3">
                                    <i className="fa-solid fa-user fa-2x"></i>
                                    <p className="my-chat-message note note-light ms-3">Привет, как тебя зовут? Привет, как
                                        тебя зовут? Привет, как тебя зовут? Привет, как тебя зовут? Привет, как тебя
                                        зовут?</p>
                                </div>
                                <div className="d-flex ">
                                    <i className="fa-solid fa-circle fa-2x" ></i>
                                    <p className="my-chat-message ms-3 mb-0">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div 
                        className="d-flex align-items-center sticky-bottom">
                        <input  type="text"
                            className="form-control form-control-lg me-2 rounded-pill" placeholder="Введите запрос сюда..."
                            id="prompt_input" />
                        <button type="button"
                            className="btn btn-success rounded-pill" data-mdb-ripple-init data-mdb-ripple-color="light"
                            id="send_message">
                            <i className="fa-solid fa-paper-plane fs-3"></i>
                        </button>
                    </div>

                </div>
            </div>
        </main>
    </div>


    )
  }
}

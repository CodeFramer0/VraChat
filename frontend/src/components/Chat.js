import React, { Component } from 'react'




export default class Chat extends Component {
  render() {
    return (
        <div class="d-flex">
        <main class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <section class="card mb-3">
                        <div class="card-header text-muted">
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                <div class="d-flex mb-3">
                                    <i class="fa-solid fa-user fa-2x"></i>
                                    <p class="my-chat-message note note-light ms-3">123</p>
                                </div>
                                <div class="d-flex ">
                                    <i class="fa-solid fa-circle fa-2x" style={{ color: '#32d704' }}></i>
                                    <p class="my-chat-message ms-3 mb-0">123
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div style={{ paddingbottom:'2%',background:'#303030',boxshadow: '0px  -7px  14px 0px #30303' }}
                        class="d-flex align-items-center sticky-bottom">
                        <input style={{ margintop: '2%',  boxshadow: '0px 0px 2px 2px white' }} type="text"
                            class="form-control form-control-lg me-2 rounded-pill" placeholder="Введите запрос сюда..."
                            id="prompt_input" />
                        <button type="button"
                            class="btn btn-success rounded-pill" data-mdb-ripple-init data-mdb-ripple-color="light"
                            id="send_message">
                            <i class="fa-solid fa-paper-plane fs-3"></i>
                        </button>
                    </div>

                </div>
            </div>
        </main>
        </div>


    )
  }
}

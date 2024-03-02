const parent =  document.querySelector('.card-text');



function get_id(){
    ids = document.querySelectorAll('.ms-3.mb-0');
  
    return `${ids.length+1}`
    
  }
  
  "use strict";
  const sidebarTogglerButton = document.querySelector('.sidebar-toggler-btn');
  const bardWrapperElement = document.querySelector('#bard__wrapper');
  if (sidebarTogglerButton && bardWrapperElement) {
      sidebarTogglerButton.addEventListener('click', () => {
          bardWrapperElement.classList.toggle('nav-active');
      });
  }
  
  
  
  
  document.querySelector("#send_message").addEventListener("click", async(e) => {
  
    let promt_input = document.querySelector('.rounded-pill');
    promt_text = promt_input.value;
    promt_input.value = '';
    user_message = document.createElement('div');
  
    user_message.innerHTML = `<div class="d-flex mb-3">
                                      <i class="fa-solid fa-user fa-2x"></i>
                                      <p class="note note-light ms-3">${promt_text}</p>
                                  </div>`
  
    parent.appendChild(user_message);
  
  
    
    
  
    
    let id = get_id();
    let bot_message = document.createElement('div');
    bot_message.innerHTML = `
    <div class="d-flex align-items-center">
                                      <i class="fa-solid fa-circle fa-2x" style="color: #32d704;"></i>
                                      <p class="ms-3 mb-0" id = "${id}"  hidden> 
                                      </p>
                                  </div>
    `;
  
  
    // answer.text
    parent.appendChild(bot_message);
    
  
    await get_answer(promt_text,id)
  
  
    
      
  
  });
  
  
  async function get_answer(promt_text,id) {
    el = document.getElementById(id);
    el.hidden = false;
  
    console.log(window.location.href);
    const response = await fetch(`http://127.0.0.1:8000/api-auth/gpt/?promt=${promt_text}&chat_id=${chat_id}`);
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let result = await reader.read();
    while (!result.done) {
      const text = decoder.decode(result.value);
      console.log("chunk is", text)
      result = await reader.read();
      
      el.textContent += text;
      
    
     
    }
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
    function getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie != '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i].trim();
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) == (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  }
  
  
  
  
  
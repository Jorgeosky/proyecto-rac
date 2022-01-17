import React from 'react';

const messageApi = [];

export default function messages() {
  return (
    <div className='messages'>
      <h2>Your Messages</h2>
      {
        messageApi.length !== 0 ?
          <div>
            si hay messages
          </div> :
          <div>
            <img src="message_empty.jpg" alt="messageEmpty"></img>
            <h4>No Messages yet</h4>
          </div>
      }
    </div>
  )
}

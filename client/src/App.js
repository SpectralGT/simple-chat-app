import React, { useState, useEffect } from "react";
import "./App.css"

const URL = 'wss://simple-chat-app-atharv.herokuapp.com/8080';

const App = () => {
	const [user, setUser] = useState('Atharv');
  	const [message, setMessage] = useState([]);
  	const [messages, setMessages] = useState([]);
  	const [ws, setWs] = useState(new WebSocket(URL));

  	const submitMessage = (usr, msg) => {
  		const message = { user: usr, message: msg };
  		ws.send(JSON.stringify(message));
  		setMessages([message, ...messages]);
  	}

  	useEffect(() => {
	    ws.onopen = () => {
	      console.log('WebSocket Connected');
	    }

	    ws.onmessage = (e) => {
			const rmessage = JSON.parse(e.data);
			console.log(JSON.parse(e.data));
			setMessages([rmessage, ...messages]);
			console.log(messages);
	    }

	    return () => {
	      ws.onclose = () => {
	        console.log('WebSocket Disconnected');
	        setWs(new WebSocket(URL));
	      }
	    }
  	}, [ws,ws.onmessage, ws.onopen, ws.onclose, messages]);

  	return (
	    <div>
	        <label htmlFor="user">
	          Name:     
	          <input
			  className="nameInput"
	            type="text"
	            id="user"
	            placeholder="User"
	            value={user}
	            onChange={e => setUser(e.target.value)}
	          />
	        </label>
	        <form
	          action=""
	          onSubmit={e => {
	            e.preventDefault();
	            submitMessage(user, message);
	            setMessage([]);
	          }}
	        >
	          <input
	            type="text"
	            placeholder={'Type a message ...'}
	            value={message}
	            onChange={e => setMessage(e.target.value)}
	          />
	          <input type="submit" value={'Send'} />
	        </form>

	        <ul>
					{messages.map((ele, index) => {
						return <li key={index}>
							<b>{ele.user}</b>: <em>{ele.message}</em>
						</li>
				})}
	        </ul>

	    </div>
  	)
}

export default App;
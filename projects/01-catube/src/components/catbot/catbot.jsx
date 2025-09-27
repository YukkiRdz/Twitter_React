//assets
import CatbotLogo from '../../assets/logo/catbot_white.svg'

//style
import './catbot.css'

//components
import { useState } from 'react';
import { useDropdown } from '../hooks/useDropdown.jsx';

export default function Catbot() {
    const { isOpen, toggleMenu, menuRef } = useDropdown();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        console.log("Enviando mensaje:", input);
        const newMessages = [...messages, { sender: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        try {
        const res = await fetch("http://localhost:5000/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input }),
        });
        const data = await res.json();

        setMessages([...newMessages, { sender: "bot", text: data.reply }]);
        } catch (err) {
            console.error("Error en fetch:", err);
            setMessages([...newMessages, { sender: "bot", text: "Error de conexión 🚨" }]);
        }
    };

    return (
        <div className="catbot" ref={menuRef}>
            <button className={`catbotButton ${isOpen ? "hidden" : ""}`} onClick={toggleMenu}>
                <img className='catbotLogo' src={CatbotLogo} alt="Catbot logo" />
            </button>
            {isOpen && (
                <div className="catbotDropdown">
                    <div className="catbotHeader">
                        <img className='catbotLogo' src={CatbotLogo} alt="Catbot logo" />
                        <h3 className='titleCatbot'>CatBot</h3>
                    </div>

                    <div className="catbotMessageContainer">
                        {messages.map((msg, i) => (
                            <div key={i} className='catbotMessage'>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="catbotInputContainer">
                        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} placeholder="Escribe tu mensaje..." className="catbotInput"/>
                        <button onClick={sendMessage} className="catbotButton">
                            Enviar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

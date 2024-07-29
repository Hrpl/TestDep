import { useContext, useRef, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import "../styles/Login.css"

import {apiLogin} from '../services/api-services'
import Cookies from 'js-cookie';
import Modal from 'react-bootstrap/Modal';

export function Login(props){
    
    const {user, setUser } = useContext(AuthContext)
    
    const [showPassword, setShowPassword] = useState(false)
    const errorRef = useRef(null)

    async function clickLoginButton(){
        const resp = await apiLogin(user.login, user.password)
        
        if(resp != null) {
            Cookies.set('userName', `${resp.data.name}`, { expires: 1})
            Cookies.set('userLogin', `${resp.data.login}`, { expires: 1})
            location.reload()
            props.onHide()
        }
        else errorRef.current.hidden = false
    }

    return(
        <div className="modal show "
        style={{display: 'block', 
            position: 'initial'}}
        >
            <Modal {...props}
            >
                <Modal.Header className="border-0 justify-content-end">
                    <h2 className="bi bi-x x m-0 text-center" onClick={() => props.onHide()}></h2>
                </Modal.Header>
                <Modal.Body>
                    <h2 className="text-center mb-5" style={{fontWeight: 600}}>Добро пожаловать</h2>
                    <div className="d-flex flex-column mx-5">
                        <label className="ms-2"  htmlFor="Email"> <b>Email</b></label>
                        <input value={user.login} className="form-control m-2 rounded-3 border-2" id="Email" type="text" 
                        onChange={(event) => setUser({...user, login: event.target.value})} 
                        placeholder="Email"/>
                    </div>
                    
                    <div className="d-flex flex-column mx-5">
                        <label className="ms-2" ><b>Пароль</b></label>
                        <span className="input-container">
                            <input value={user.password} className="form-control m-2 rounded-3 border-2" id="password" type={showPassword ? "text" : "password"}
                            onChange={(event) => setUser({...user, password: event.target.value})} 
                            placeholder="Пароль"/> 
                            
                            <span onClick={() => setShowPassword(!showPassword)} className="toggle-password">
                                {showPassword ? 
                                
                                <i className="bi bi-eye-slash"></i>
                                :
                                <i className="bi bi-eye "></i> }
                                
                            </span>
                        </span>

                        <section ref={errorRef} className="text-danger ms-2" hidden>
                            <h6 className="bi bi-exclamation-triangle d-inline"></h6> Неверный логин или пароль
                        </section>
                    </div>

                    <section className="d-flex justify-content-center flex-column">
                        <button className="btn text-white d-flex align-self-center justify-content-center mt-3 mb-0 rounded-5" style={{
                            fontWeight: 600,
                            margin: "0.5rem",
                            width: "10vw",
                            backgroundColor: "#e60023"
                        }}
                        onClick={clickLoginButton}>Войти</button>

                        <button className="btn d-flex align-self-center justify-content-center mt-3 mb-0 rounded-5" style={{
                            fontWeight: 600,
                            margin: "0.5rem",
                            width: "10vw",
                            backgroundColor: '#cdcdcd'
                        }}
                        onClick={() => {
                            props.onHide()
                            setUser({login: "", password: ""})
                            }}>Закрыть</button>
                    </section>
                    
                </Modal.Body>
            </Modal>
        </div>
    )
}
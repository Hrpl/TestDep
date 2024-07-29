
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {apiCreateNewUser} from '../services/api-services'

import "../styles/Regis.css"

export function Regis(props){
    const [newUser, setNewUser] = useState({
        name: '',
        surname: '',
        birthday: '',
        login: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(false)

    async function clickRegButton(){
        await apiCreateNewUser(newUser)
    }

    return(
        <div className="modal show "
        style={{display: 'block', 
            position: 'initial'}}>
            <Modal {...props}>
                <Modal.Header className="border-0 justify-content-end">
                    <h2 className="bi bi-x x m-0 text-center" onClick={() => props.onHide()}></h2>
                </Modal.Header>

                <Modal.Body>
                    <h2 className="text-center mb-5" style={{fontWeight: 600}}>Добро пожаловать</h2>

                        <div className="d-flex flex-column mx-5">
                            <label className="ms-2" htmlFor="name"> <b>Имя</b></label>
                            <input value={newUser.name} className="form-control m-2 rounded-3 border-2" id="name" type="text" 
                            onChange={(event) => setNewUser({...newUser, name: event.target.value})} 
                            placeholder="Имя"
                            required/>   
                        </div>

                        <div className="d-flex flex-column mx-5">
                            <label className="ms-2"  htmlFor="surname"> <b>Фамилия</b></label>
                            <input value={newUser.surname} className="form-control m-2 rounded-3 border-2" id="surname" type="text" 
                            onChange={(event) => setNewUser({...newUser, surname: event.target.value})} 
                            placeholder="Фамилия"
                            required/>   
                        </div>

                        <div className="d-flex flex-column mx-5">
                            <label className="ms-2"  htmlFor="birthday"> <b>Дата рождения</b></label>
                            <input value={newUser.birthday} className="form-control m-2 rounded-3 border-2" id="birthday" type="date" 
                            onChange={(event) => setNewUser({...newUser, birthday: event.target.value})} 
                            placeholder="Дата рождения"
                            required/>   
                        </div>

                        <div className="d-flex flex-column mx-5">
                            <label className="ms-2"  htmlFor="email"> <b>Email</b></label>
                            <input value={newUser.login} className="form-control m-2 rounded-3 border-2" id="email" type="email" 
                            onChange={(event) => setNewUser({...newUser, login: event.target.value})} 
                            placeholder="Email"
                            required/>   
                        </div>

                        <div className="d-flex flex-column mx-5">
                            <label className="ms-2" ><b>Пароль</b></label>
                            <span className="input-container">
                                <input value={newUser.password} className="form-control m-2 rounded-3 border-2" id="password" type={showPassword ? "text" : "password"}
                                onChange={(event) => setNewUser({...newUser, password: event.target.value})} 
                                placeholder="Пароль"
                                minLength="8"
                                required/> 
                                
                                <span onClick={() => setShowPassword(!showPassword)} className="toggle-password">
                                    {showPassword ? 
                                    <i className="bi bi-eye "></i> 
                                    :
                                    <i className="bi bi-eye-slash"></i>}
                                </span>
                            </span>
                        </div>

                        <section className="d-flex justify-content-center flex-column">
                            <button className="btn text-white d-flex align-self-center justify-content-center mt-3 mb-0 rounded-5" style={{
                                fontWeight: 600,
                                margin: "0.5rem",
                                width: "10vw",
                                backgroundColor: "#e60023"
                            }}
                            onClick={clickRegButton}>Зарегистрироваться</button>

                            <button className="btn d-flex align-self-center justify-content-center mt-3 mb-0 rounded-5" style={{
                                fontWeight: 600,
                                margin: "0.5rem",
                                width: "10vw",
                                backgroundColor: '#cdcdcd'
                            }}
                            onClick={() => {props.onHide()}}>Закрыть</button>
                        </section>
                    
                </Modal.Body>

            </Modal>
        
        </div>
    )
}
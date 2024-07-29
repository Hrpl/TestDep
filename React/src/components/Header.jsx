import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { Login } from "./Login";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/Header.css";
import { Regis } from "./Regis";

export function Header(){

    const [showLogin, setShowLogin] = useState(false)
    const [showRegis, setShowRegis] = useState(false)

    const user = Cookies.get('userName')

    return(
        <header className="d-flex justify-content-between">
            <section className="d-flex mx-1">
                <Link to="/" c>
                    <h4 className="m-0 mt-1"
                    style={{color: "#e60023"}}>Главная</h4>
                </Link>
            </section>

            <section className="d-flex mt-2">
                <Link to="/project" className="mx-3 mt-1 link text-black" style={{
                    fontSize: "1rem",
                    padding: "0.38rem"
                    }}>
                       <p className=" text-black">Проекты</p> 
                </Link>

                {user ? (
                    <div className="circel m-1"><div className="mt-2"></div></div>
                ):(
                    <div className="m-0 p-0">
                        <Button onClick={() => setShowLogin(true)} className="btn mt-1 mx-2 rounded-5 border-0" style={{
                            backgroundColor: "#e60023",
                            fontWeight: 600
                        }}>Войти</Button>

                        <div className="" hidden>
                            <Login show={showLogin} onHide={() => setShowLogin(false)}></Login>
                        </div>    

                        <Button onClick={() => setShowRegis(true)} className="btn mt-1 mx-2 rounded-5 border-0 text-dark" style={{
                            backgroundColor: "#cdcdcd",
                            fontWeight: 600
                        }}>Регистрация</Button>

                        <div className="" hidden>
                            <Regis show={showRegis} onHide={() => setShowRegis(false)}></Regis>
                        </div>

                    </div>
                    
                )}
            </section>
            
            
        </header>
    )
}
import { useEffect } from "react"
import { useState } from "react"
import Cookies from 'js-cookie';
import {apiGetProjectByLogin} from '../services/api-services'
import Card from 'react-bootstrap/Card';
import "../styles/Project.css"

export function Projects(){

    const [userLogin, setUserLogin] = useState(Cookies.get('userLogin'))
    const [projects, setProject] = useState([]);

    async function getData(){
        const u = await apiGetProjectByLogin(userLogin)
        setProject(u);
    }

    useEffect(() => {
        getData()   
    }, [userLogin])

    return(
        <>
        {userLogin != undefined ?
            projects != null && projects.length > 0 ?
            <div className="row p-0 m-0 justify-content-between">
                <h3 className="mt-4">Текущие проекты</h3>
                
                    {projects.filter(p => p.status != "Завершён").map((project, index) => {
                        return(
                            <Card className="col-3 mx-4 my-2 rounded-3 bg-white card p-0    " key={index}>
                                <Card.Header >
                                <h4 className="text-center ">{project.name}</h4>
                                </Card.Header>
                                <Card.Body className="row">

                                <span className="col-5 mt-2">Заказчик: {project.client}</span>
                                <span className="col-6 mt-2 text-end">Статус: {project.status} <i className="bi bi-clock"></i></span>
                                
                                <div className="row col-12 justify-content-center ">
                                    <button className="btn rounded-5 text-white mt-3 col-4" style={{ 
                                        backgroundColor: "#e60023",
                                        fontWeight: 600}}>Подробнее</button>
                                </div>
                                
                                </Card.Body>
                            </Card>
                        )
                    })}
                
                
                <h3 className="mt-5">Выполненные проекты</h3>
                    {projects.filter(p => p.status == "Завершён").map((project, index) => {
                        return(
                                <Card className="col-3 mx-4 my-2 rounded-3 bg-white text-secondary card p-0" key={index}>
                                    <Card.Header >
                                    <h4 className="text-center ">{project.name}</h4>
                                    </Card.Header>
                                    <Card.Body className="row">

                                    <span className="col-5 mt-2">Заказчик: {project.client}</span>
                                    <span className="col-6 mt-2 text-end">Статус: {project.status} <i className="bi bi bi-check-lg"></i></span>
                                    
                                    <div className="row col-12 justify-content-center ">
                                    <button className="btn rounded-5 text-white bg-secondary mt-3 col-4" style={{ 
                                        fontWeight: 600,}}>Подробнее</button>
                                    </div>
                                    
                                    </Card.Body>
                                </Card>
                        )
                    })}
                
            </div>
            :
                <h2 className="d-flex justify-content-center mt-5">У вас ещё нет проектов!</h2>
        :
            <h2 className="d-flex justify-content-center mt-5">Сначало авторизуйтесь!</h2>
        }
        </>
    )   
}


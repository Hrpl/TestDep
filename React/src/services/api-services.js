
import axios from "axios"

export async function apiLogin(login, password){

    try{
        const data = await axios.get(`http://192.168.0.12:8081/api/users/login/${login}/${password}`)

        return data
    }
    catch(error){
        return null
    }
}

export async function apiGetProjectByLogin(login){
    try{
        const data = await axios.get(`http://192.168.0.12:8080/api/ps/findByUser/${login}/`)
        
        return data.data
    }
    catch(error){
        return null
    }
}

export async function apiCreateNewUser(user){
    
    const config = {
        method: 'post', // Метод запроса
        url: "http://192.168.0.12:8081/api/users/create/", // URL-адрес API
        data: user, // Данные, которые вы хотите отправить
        headers: {
          'Content-Type': 'application/json' // Указание типа содержимого
        }
      };

    axios(config).then((resp) => {
        if(resp.status == 201){
            alert("201")
        }
        else alert("Error")
    }).catch((error) => console.log(error))
    
}
     
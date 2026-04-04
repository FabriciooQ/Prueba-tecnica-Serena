import { Await } from "react-router-dom"

const API_URL = "http://localhost:3000"

export const postTurno = async(payload)=>{
  // eslint-disable-next-line no-useless-catch
  try{
    const response = await fetch(`${API_URL}/sessions`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(payload)
      }
    )

    if(!response.ok){
      throw new Error("Error al reservar la sesion")
    }
    const data = await response.json()
    return data
  }catch(error){
    throw error
  }


}

export const getSesiones = async (id) => {
  try {
    const response = await fetch(`${API_URL}/sessions/${id}`)

    if (!response.ok) {
      throw new Error("Error al obtener las sesiones")
    }

    const data = await response.json()
    return data

  } catch (error) {
    console.error("API ERROR:", error)
    throw error 
  }
}

export const getPsychologists = async () => {
  try {
    const response = await fetch(`${API_URL}/psychologists`)

    if (!response.ok) {
      throw new Error("Error al obtener psicólogos")
    }

    const data = await response.json()
    return data

  } catch (error) {
    console.error("API ERROR:", error)
    throw error 
  }
}

export const getEmpleado = async() => {
  try{
    const response = await fetch(`${API_URL}/empleado`)
    if(!response.ok){
      throw new Error("Error al obtener el empleado")
    }

    const data = await response.json()
    return data
  }catch(error){
    console.error("API ERROR", error)
    throw error
  }
}


export const getTurnosPsicologo = async(id) => {
  try{
    const response = await fetch(`${API_URL}/psychologists/${id}/slots`)
    if(!response.ok){
      throw new Error("Error al obtener turnos")
    }

    const data = await response.json()
    return data
  }catch(error){
    console.error("API ERROR", error)
    throw error
  }
}
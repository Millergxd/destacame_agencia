import { insert } from '../api/api'

export const fillTrayectos = () => {
  const trayectos=[
    {
      ida:"oli",
      vuelta:"oli2",
      terminal:"oli3"
    },
    {
      ida:"we",
      vuelta:"we2",
      terminal:"we3"
    },
    {
      ida:"its enough",
      vuelta:"stap",
      terminal:"meh"
    }
  ]
  
  trayectos.forEach(trayecto =>{
    insert('trayecto',{...trayecto}).then(response=>{console.log(response.request)})
  })
}

export const fillBus = () => {
  const buses=[
    {
      ida:"oli",
      vuelta:"oli2",
      terminal:"oli3"
    },
    {
      ida:"we",
      vuelta:"we2",
      terminal:"we3"
    },
    {
      ida:"its enough",
      vuelta:"stap",
      terminal:"meh"
    }
  ]
  
  buses.forEach(bus =>{
    insert('bus',{...bus}).then(response=>{console.log(response.request)})
  })
}

export const insertBus = () => {
  const bus={
    patente:"ABCDF",
    marca:"whatever",
  }
  
  insert('bus',{...bus}).then(response=>{console.log(response.request)})
}
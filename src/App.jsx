import { PropsApp } from './components/PropsApp'
import { CounterApp } from './components/CounterApp'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { ListaTareas } from './components/ListaTareas'
import { useState, useEffect } from 'react'

function App() {

  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

  useEffect(() => {
  
    const obtenerLocalStorage = () => {
      const tareasLocalStorage = JSON.parse(localStorage.getItem("tareas")) ?? [];
      setTareas(tareasLocalStorage);
    }

    obtenerLocalStorage();

  },[]);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  },[tareas]);

  const eliminarTarea = (id) => {
    const TareasActualizadas = tareas.filter(filterTarea => filterTarea.id !== id);

    setTareas(TareasActualizadas);
  };

  return (
    <div className='App'>
      <Header></Header>
      <div className='mt-12 md:flex mx-auto justify-center'>
        <Form
          tarea={tarea}
          tareas={tareas}
          setTareas={setTareas}
          setTarea={setTarea}
        />
        <ListaTareas
          tareas={tareas}
          setTarea={setTarea}
          eliminarTarea={eliminarTarea}
        />
      </div>
    </div>
  )
}

export default App


{/* <PropsApp 
        titulo={"Hola mundo"}
        parrafo={15}
        descripcion={"Lorem Impsum dolor sit amet."}
      ></PropsApp>
      <CounterApp value={0}></CounterApp>
      <h1 className=''></h1> */}
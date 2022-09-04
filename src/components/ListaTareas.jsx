import { Tareas } from "./Tareas"

export const ListaTareas = ({ tareas, setTarea, eliminarTarea }) => {

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-auto'>
      {tareas && tareas.length ? (
        <>
          <h2 className='font-black text-3xl text-center mb-10'>Lista de tareas 🤓</h2>
          {tareas.map((tarea) => {
            return <Tareas key={tarea.id} tarea={tarea} setTarea={setTarea} eliminarTarea={eliminarTarea}/>
          })}
        </>
      ) : (
        <h2 className='font-black text-3xl text-center mb-10'>No hay tareas 😎</h2>
      )}


    </div>
  )
}

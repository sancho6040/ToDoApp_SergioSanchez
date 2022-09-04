import React from "react";

export const Tareas = ({tarea, setTarea, eliminarTarea}) => {

  const {titulo, fecha, descripcion, id} = tarea;

  const handleEliminar = () => {
    const pregunta = confirm("¿Desea eliminar la tarea?");
    if(pregunta) eliminarTarea(id);
  }
  
  return (
    <div className='bg-white shadow-md mb-5 px-5 py-10 rounded-lg'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Titulo: <span className='font-normal normal-case'>{titulo}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Fecha: <span className='font-normal normal-case'>{fecha}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
          Descripcion: <span className='font-normal normal-case'>{descripcion}</span>
        </p>
        <div className="flex justify-around">
          <button 
            className="mt-4 py-2 px-10 rounded-lg bg-green-500 hover:bg-green-600 transition-colors text-white"
            onClick={() => setTarea(tarea)}
            >
              editar
          </button>
          <button 
            className="mt-4 py-2 px-10 rounded-lg bg-red-600 hover:bg-red-700 transition-colors text-white"
            onClick={handleEliminar}
            >
              eliminar
          </button>
        </div>
    </div>
  );
}

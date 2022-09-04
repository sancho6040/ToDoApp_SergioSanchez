import React from 'react'
import { useState, useEffect } from 'react'
import { AlertError } from './AlertError';

export const Form = ({ tarea, tareas, setTareas, setTarea }) => {

  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState();
  const [descripcion, setDescripcion] = useState();

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setTitulo(tarea.titulo);
      setFecha(tarea.fecha);
      setDescripcion(tarea.descripcion);
    }
  }, [tarea])

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([titulo, fecha, descripcion].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    //objeto de tareas
    const outTarea = {
      titulo,
      fecha,
      descripcion
    }

    if (tarea.id) {
      //editar tarea
      outTarea.id = tarea.id;

      const tareasActualizadas = tareas.map((tareaState) =>
        tareaState.id === tarea.id ? outTarea : tareaState
      );

      setTareas(tareasActualizadas);
      setTarea({});//limpiar tarea
    } else {
      //nuevo tarea
      outTarea.id = generarId();
      setTareas([...tareas, outTarea]);
    }

    //limpiar el formulario
    setTitulo("");
    setFecha("");
    setDescripcion("");
  }

  const generarId = () => {
    return Math.random().toString(10).substr(2);
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center mb-10'>Crear tarea</h2>

      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        {error && (<AlertError><p>Todos los campos son necesarios</p></AlertError>)}
        <div className='mb-5'>
          <label
            htmlFor="titulo"
            className='block text-gray-700 uppercase font-bold'
          >Titulo
          </label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            placeholder='Titulo de la tarea'
            className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor="fecha"
            className='block text-gray-700 uppercase font-bold'
          >Fecha
          </label>
          <input
            id="fecha"
            type="date"
            value={fecha}
            className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor="descripcion"
            className='block text-gray-700 uppercase font-bold'
          >Fecha
          </label>
          <textarea
            id="descripcion"
            type="text"
            value={descripcion}
            placeholder='Descripcion de la tarea'
            className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        {!tarea.id ? (
          <input
            type="submit"
            className='bg-blue-600 w-full p-3 text-white rounded-md uppercase font-bold hover:bg-blue-700 transition-colors cursor-pointer'
            value="Crear tarea"
          />
        ) : (
          <input
            type="submit"
            className='bg-purple-600 w-full p-3 text-white rounded-md uppercase font-bold hover:bg-purple-700 transition-colors cursor-pointer'
            value="Actualizar tarea"
          />
        )}

      </form>
    </div>
  )
}

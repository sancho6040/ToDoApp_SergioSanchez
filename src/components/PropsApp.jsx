import PropsTypes from 'prop-types'

export const PropsApp = ({titulo, parrafo, descripcion}) => {

    return (
        <>
        <h1>{titulo}</h1>
        <p>{parrafo}</p>
        <p>{descripcion}</p>
        </>
    );
};


//define los tipos de dato de los props
PropsApp.prototypes = {
    titulo: PropsTypes.string.isRequired,
    parrafo: PropsTypes.number.isRequired,
    descripcion: PropsTypes.string.isRequired
}

//defien valores por deafault para los props
PropsApp.defailtProps = {
    titulo: 'Soy un titulo 😄',
    parrafo: 10,
    descripcion: 'Lorem Ipsum'
}

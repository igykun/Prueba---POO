// Una funcion automatica que se exporta al Script principal, en esta funcion hacemos un llamado a la API 
// y utilizando el try/catch para que no se derrumbe el proyecto revisamos la conexion, en caso de error 
// se manda un mensaje de error
export const mandarDatos = (() => {
    const obtenerDatos = async () => {
        try {
            const url = './animales.json';
            const respuesta = await fetch(url);
        
            if (!respuesta.ok) {
                throw new Error(`Error de conexion: ${respuesta.status} ${respuesta.statusText}`);
            }

            return await respuesta.json();
        } catch (error) {
            alert(`Error de conexion con la API: ${error.message}`);
            return null; 
        }
    };

    return {
        mostrar: obtenerDatos()
    };
})();
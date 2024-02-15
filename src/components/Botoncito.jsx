
import { useState} from 'react';

export const Botoncito = () => {
    const [showEliminar, setShowEliminar] = useState(false);

    const handleClick = () => {
        console.log("Eliminado");
        setShowEliminar(true);
    };

    return (
        <div>
          <button
            className="button-eliminar"
            onClick={handleClick}
            onMouseOver={() => setShowEliminar(true)}
            onMouseOut={() => setShowEliminar(false)}
          >
            ❌
          </button>
          {showEliminar && <p className="mensaje-eliminado">Eliminar</p>}
        </div>
      );
}



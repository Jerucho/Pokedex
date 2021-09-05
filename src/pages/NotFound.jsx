import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NotFound extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Lo sentimos, Esta pagina no existe</h1>

                <Link to="/" >Volver a Inicio</Link>

            </div>
         );
    }
}
 
export default NotFound;
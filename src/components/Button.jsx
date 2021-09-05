import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <Link to="/Info">
                Ir a Info
            </Link>
         );
    }
}
 
export default Button;
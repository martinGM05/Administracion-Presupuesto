import React, {Fragment} from 'react';
import {revisarPresupesto} from '../helper';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
     );
}

ControlPresupuesto.prototype = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;
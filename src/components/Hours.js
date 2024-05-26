// Placeholder to host a component
import React from 'react';


const Hours = () => {
    //get only the current day of the week
    let day = new Date().getDay();

    //SI es un dia entre semana, desplegar el horario de 10am a 4pm, si es sabado o domingo, desplegar que el horario es de 9am a 8pm;
    if(day >= 1 && day <= 5){
        return (<div>
            <h3>Today Opening Hours</h3>
                <p>Hours: 10am - 4pm</p>
            </div>);
    } else {
        return (<div>
        <h3>Today Opening Hours</h3>
            <p>Hours: 9am - 8pm</p>
        </div>);
    }
};
export default Hours;
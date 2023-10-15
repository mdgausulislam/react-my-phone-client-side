import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Phone from '../Phone/Phone';

const Phones = () => {
    const phones=useLoaderData();
    return (
        <div>
            <h1>Phones:{phones.length}</h1>
            {/* {
                phones.map(phone=><Phone
                key={phone.id}
                phone={phone}
                ></Phone>)
            } */}
            {
                phones.map(phone=><li key={phone.id}>
                    <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
                </li>)
            }
        </div>
    );
};

export default Phones;
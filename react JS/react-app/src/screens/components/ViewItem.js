import { useLocation } from 'react-router-dom';
import React, { useState } from 'react'
import EditItem from './EditItem';

export default function ViewItem() {

  const { state } = useLocation();

  const [edit, setedit] = useState(false)

  return (
  <div className='row'>
    <div className="card" style={{width: "100%" , height: "100%"}}>
      <img style={{width:'40%', height: "40%", margin: "auto"}} src={state.img} className="card-img-top" alt="..."/>
      <button className='btn btn-primary' onClick={()=>setedit(true)}>Edit</button>
        
        {edit &&
        <EditItem
        id={state.id}
        EditPrice={state.price}
        EditView={state.Overview}
        EditAvailabilty={state.in_stock}
        finishEdit={()=>setedit(false)}
        collection = {state.collection}
        />}

      <div className="card-body">
        <h5 className="card-title">{state.name}</h5>
        <p className="card-text">Price: {state.price}₪</p>
        <p className="card-text" dangerouslySetInnerHTML={{__html:state.Overview}}></p>
        <p className="card-text">Availability: {state.in_stock ? "in stock" : "not in stock"}</p>
      </div>
    </div>
  </div>
  );
}

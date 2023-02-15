import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../../firebase-config';

export default function AddItem({ id , coll ,onClose }) {

  // store the previous data, and can update to new data from input.  
  const [name, setName] = useState('');
  const [overview, setView] = useState('');
  const [price, setPrice] = useState('');
  const [img, setimg] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

  if ('Screens' === coll ){
    await addDoc(collection(db, 'Screens'), {
        name: name, 
        Overview: overview,
        price: price,
        in_stock: true, 
        img : img,
        created: Timestamp.now() 
        })
        onClose();
  }

else if  ('Equipment' === coll ){
    await addDoc(collection(db, 'Gaming-Equipment'), {
        name: name, 
        Overview: overview,
        in_stock: true, 
        img : img,
        created: Timestamp.now() 
        })
        onClose();
  }

else if ('Hardware' === coll ){
    await addDoc(collection(db, 'Hardware'), {
        name: name, 
        Overview: overview,
        in_stock: true, 
        img : img,
        created: Timestamp.now() 
        })
        onClose();
  }

else{
    throw new Error(`Invalid document ID: ${id}`);
}
}

  return (
    <form onSubmit={handleSubmit} style={{backgroundColor:'lightgray', padding: 10, marginTop:3}}>
            <h4 className='text-center'>Add a new Item</h4>
            <label>Add Name</label>
            <input type='text' onChange={(e)=>setName(e.target.value)}
            className='form-control' value={name}/>

            <label>Add an Overview</label>
            <textarea type='text' onChange={(e)=>setView(e.target.value)}
            className='form-control' value={overview}></textarea>

            <label>Add a Price</label>
            <textarea type='number' onChange={(e)=>setPrice(e.target.value)}
            className='form-control' value={price}></textarea>

            <label>Add an Image</label>

            <textarea type='text' onChange={(e)=>setimg(e.target.value)}
            className='form-control' value={img}></textarea>
            
            <input type='submit' className='btn btn-success mt-2'/>
    </form>
  )
}
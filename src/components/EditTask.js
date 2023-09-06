// // import React, {useState} from 'react'
// // import ProductListing from "./ProductListing"
// import { useEffect, useState } from 'react';
// import './styles/Modal.css'

// // const Modal = () => {
// //     const[showModal,setShowModal]= useState(false);

// //     const closeModal = () => setShowModal(false)
 
//     const MyModal = ( {closeModal , updateTask} ) => {

//         useEffect(() => {
        
//             document.body.style.overflowY= "hidden";

//           return () => {document.body.style.overflowY= "scroll";}
//         }, [])
        
//         const [taskName, setTaskName] = useState('');
//         const [description, setDescription] = useState('');

//         const handleChange = (e) => {
//             // const name = e.target.name
//             // const value = e.target.value
//         const {name , value} = e.target

//         if( name === "productName"){
//             setTaskName(value)
//         }
//         else
//             setDescription(value)
        
//         }

//         const handleSave = () => {
//             let taskObj = {}
//             let index = {}
//             taskObj["Name"] = taskName
//             taskObj["Description"] = description
//             updateTask(taskObj)
//         }

//         return (
//             <>
//             <div className="modal-wrapper"></div>
//             <div className="modal-container">
//             <h4>List your Product</h4>
//                 <br/>

                    
//                         <span>Name of Product</span>
//                         <input type="text" className="input1" value = {taskName}
//                         onChange={handleChange} name='productName' required/>
//                         <br/>
//                         <span>Description of Product</span>
//                         <textarea type="text" rows={5} cols={40} value={description} onChange={handleChange} name='productDes' required/>
//                         <br/>
//                         <span>Cost of Product</span>
//                         <input type="integer" className="input2" required/>
//                         <span>per</span>
//                         <input type="text"
//                         className='unit' required/>
//                         <br/>
//                         <label htmlFor="product-image">Product Image:</label>
//                         <input type="file" id="product-image" name="product-image"/>
                        
           

//             <button className="btn" onClick={handleSave}>Update Product</button>
//             <button className="btn" onClick={closeModal}>Cancel</button>
//             </div>
//             </>
//           );        
//     };
// //     return (
// //     <>
// //     <button className='btn' onClick={() => setShowModal(true)}>Open</button>
// //     { showModal && <MyModal closeModal = {closeModal} />}
// //     </>
// //   )
// // }

// export default EditTaskPopup;
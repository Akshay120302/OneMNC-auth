// import React, {useState} from 'react'
// import ProductListing from "./ProductListing"
import { useEffect, useState } from 'react';
import './styles/Modal.css'
// const Modal = () => {
//     const[showModal,setShowModal]= useState(false);

//     const closeModal = () => setShowModal(false)

const MyModal = ({ closeModal, save, index }) => {

    useEffect(() => {

        document.body.style.overflowY = "hidden";

        return () => { document.body.style.overflowY = "scroll"; }
    }, [])

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState([]);

    index++;

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "productName") {
            setTaskName(value)
        }
        else {
            if (name === "productDes") {
                setDescription(value)
            }
            else {
                if (name === "product-image") {

                    // let count = 0;
                    // const file = e.target.files[0];
                    // const imageUrl = URL.createObjectURL(file);
                    // console.log(e.target.files)

                    // const imageElement = document.getElementById('image');
                    // // setImageUrl()
                    // setImageUrl(e.target.files[value])
                    // imageElement.src = imageUrl;


                    setImageUrl(value);

                    // setImageUrl( prev => ({ 
                    //     ...prev,
                    //     imageUrl: e.target.files[0]

                    // }));
                }
            }
        }
    }

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["Image"] = imageUrl
        save(taskObj)
    }

    return (
        <>
            <div className="modal-wrapper"></div>
            <div className="modal-container1">
                <h4 className="Head">List your Product</h4>
                <br />


                <span className="Name">Name of Product</span>
                <input type="text" className="input1" value={taskName}
                    onChange={handleChange} name='productName' required />
                <br />
                <span className="Descr">Description of Product</span>
                <textarea type="text" rows={5} cols={40} value={description} onChange={handleChange} name='productDes' required />
                <br />
                <span className="Cost">Cost of Product</span>
                <input type="integer" className="input3" required />
                <span className="Per">per</span>
                <input type="text"
                    className='unitModal' required />
                <br />
                <label htmlFor="product-image">Product Image:</label>
                <input type="file" value={imageUrl} id="product-image" onChange={handleChange} name="product-image" placeholder="Upload file..." />



                <button className="btn" onClick={handleSave}>Add Product</button>
                <button className="btn" onClick={closeModal}>Cancel</button>
            </div>
        </>
    );
};

export default MyModal;
import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import Card from './Card';
import Footer from './Footer';
import Nav from './Nav';
import './styles/ProductListing.css';
import "./styles/Card.css";


function ProductListing(props) {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    const [taskList, setTaskList] = useState([]);



    useEffect(() => {
        let arr = localStorage.getItem("taskList");

        if (arr) {

            let obj = JSON.parse(arr)
            // let url = JSON.parse(arr)
            setTaskList(obj)
            // setTaskList(url)
        }
    }, [])

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setShowModal(false)
        setTaskList(taskList)
    }

    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    return (
        <>
            <Nav />

            <div className="header">
                <h3>Product List</h3>
                <button className="btnP" onClick={() => setShowModal(true)}>Add Products</button>
                {showModal && <Modal closeModal={closeModal} save={saveTask} />}

            </div>

            <div className="product-container1">
                <h5 className="center">List of Products:</h5>
                <div className="cardContainer">
                    {taskList && taskList.map((obj, index) => <Card taskObj={(obj)} index={index} deleteTask={deleteTask} />)}
                </div>

            </div>
            <Footer />

        </>
    );
};


export default ProductListing;
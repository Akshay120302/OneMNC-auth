import React, { useEffect, useState } from 'react'
import './styles/Cart.css'
import Footer from './Footer'
import Nav from './Nav';
import UserData from './UserData';

const API = "https://jsonplaceholder.typicode.com/users";
const Cart = () => {

    const [users , setUsers] = useState([]);
    const fetchUsers = async (url) =>{
        try{
            const res = await fetch(url);
            const data = await res.json();

            if(data.length > 0){
                setUsers(data);
            }
            console.log(data);
        }
        catch(e){
            console.error(e);
        }
    }

    useEffect(() =>{
        fetchUsers(API);
    }, []);
  return (
    <>
    <Nav/>
    <div className="MainPage">
        <div className="recommend">
            <h4 className='center'>People also purchased:</h4>
        </div>
        <div className="cartBox">
            <table className="CartItems">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <UserData users = {users}/>
                </tbody>

            </table>
        </div>
    </div>

    <Footer/>

    </>
  )
}

export default Cart
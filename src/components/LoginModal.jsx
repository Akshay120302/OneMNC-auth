import { useEffect, useState } from 'react';
import './styles/Modal.css'
import { User, useAuth0 } from "@auth0/auth0-react";

// const Modal = () => {
//     const[showModal,setShowModal]= useState(false);

//     const closeModal = () => setShowModal(false)
 
    const MyLoginModal = ( {closeLoginModal , save , index} ) => {

        useEffect(() => {
        
            document.body.style.overflowY= "hidden";

          return () => {document.body.style.overflowY= "scroll";}
        }, [])
        
        const [loginName, setLoginName] = useState('');
        const [password, setPassword] = useState('');
        // const [imageUrl, setImageUrl] = useState([]);

        index ++;

        const handleChange = (e) => {
            // const name = e.target.name
            // const value = e.target.value
        const {name , value} = e.target

        if( name === "loginName"){
            setLoginName(value)
        }
        else{
            if(name === "Password"){
            setPassword(value)
            }
            // else{
            //     if(name === "product-image"){
                    // let count = 0;
                    // const file = e.target.files[0];
                    // const imageUrl = URL.createObjectURL(file);
                    // console.log(e.target.files)
            
            // const imageElement = document.getElementById('image');
            // // setImageUrl()
            // setImageUrl(e.target.files[value])
            // imageElement.src = imageUrl;

            
            // setImageUrl(value);

            //         // setImageUrl( prev => ({ 
            //         //     ...prev,
            //         //     imageUrl: e.target.files[0]
                
            //         // }));
            //     }
            }

            //   setImageUrl(URL.createObjectURL(file));

            //   {console.log(e.target.files[0])}
        }
       



    // const handleChange = (e, index) => {
    //     const { name, value } = e.target;
      
    //     if (name === "productName") {
    //       setTaskName(value);
    //     }
    //     if (name === "productDes") {
    //       setDescription(value);
    //     }
    //     if (name === "product-image") {
    //       const file = e.target.files[0];
    //       const imageUrl = URL.createObjectURL(file);
    //       setImageUrl(imageUrl);
    //     }
    //   };



    
        // function handleApi() {
        //     const formData = new FormData()
        //     formData.append('image', imageUrl)
        // }
        

        const handleSave = () => {
            let taskObj = {}
            taskObj["loginName"] = loginName
            taskObj["Password"] = password
            // taskObj["Image"] = imageUrl
            save(taskObj)
        }

        // const imageSort = (index) => {
        //     let imgObj = {}
        //     imgObj["Image"] = imageUrl
        //     save(imgObj)
        // }
        const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
        return (
            <>
            <div className="modal-wrapper"></div>
            <div className="modal-container">
            <h4>List your Product</h4>
                <br/>

                    
                        <span>Login Name :</span>
                        <input type="text" className="input1" value = {loginName}
                        onChange={handleChange} name='loginName' required/>
                        <br/>
                        <span>Password:</span>
                        <input type="text" value={password} onChange={handleChange} name='Password' required/>
                        {/* <br/>
                        <span>Cost of Product</span>
                        <input type="integer" className="input2" required/>
                        <span>per</span>
                        <input type="text"
                        className='unit' required/>
                        <br/>
                        <label htmlFor="product-image">Product Image:</label>
                        <input type="file" value = {imageUrl} id="product-image" onChange={handleChange} name="product-image" placeholder="Upload file..." />  */}
                        
           

            {/* <button className="btn" onClick={handleSave}>Login</button> */}

                        {isAuthenticated && <p> {user.name} </p>}

                        {isAuthenticated ? (
                            <button className="btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button>
                        ) : (
                            <button className="btn" onClick={() => loginWithRedirect()}>Log In</button>
                        )
                    }


            
            <button className="btn" onClick={closeLoginModal}>Cancel</button>
            </div>
            </>
          );        
    };
//     return (
//     <>
//     <button className='btn' onClick={() => setShowModal(true)}>Open</button>
//     { showModal && <MyModal closeModal = {closeModal} />}
//     </>
//   )
// }

export default MyLoginModal;
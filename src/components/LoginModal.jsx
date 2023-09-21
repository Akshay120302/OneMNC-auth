import { useEffect, useState } from 'react';
import './styles/LoginModal.css'
import 'font-awesome/css/font-awesome.min.css';
import { useAuth0 } from "@auth0/auth0-react";

const MyLoginModal = ({ closeLoginModal, save, index }) => {

    useEffect(() => {

        document.body.style.overflowY = "hidden";

        return () => { document.body.style.overflowY = "scroll"; }
    }, [])

    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');

    index++;

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "loginName") {
            setLoginName(value)
        }
        else {
            if (name === "Password") {
                setPassword(value)
            }
        }
    }

    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (
        <>
            <div className="modal-wrapper"></div>
            <div className="modal-container">

                <div className="closebutton">
                    <i className="fa-solid fa-xmark" onClick={closeLoginModal}></i>
                </div>
                <div className="login">

                    {isAuthenticated && <p><h4 className='centre'>{user.name}</h4>  </p>}
                    {isAuthenticated ? (
                        <button className="btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button>
                    ) : (<>

                        <h4 className='centre'>Login/Signup</h4>
                        <br />


                        <span>Login Name :</span>
                        <input type="text" className="input" value={loginName}
                            onChange={handleChange} name='loginName' required />
                        <br />
                        <span>Password : </span>
                        <input type="text" value={password} className='input' onChange={handleChange} name='Password' required />
                        <br />

                        <button className="btn" onClick={() => loginWithRedirect()}>Log In</button>

                    </>

                    )
                    }


                </div>
            </div>
        </>
    );
};

export default MyLoginModal;
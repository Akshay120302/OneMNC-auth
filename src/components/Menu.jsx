import { useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './styles/Menu.css'

const Menu = ({ closeMenu }) => {

    useEffect(() => {

        document.body.style.overflowY = "hidden";

        return () => { document.body.style.overflowY = "scroll"; }
    }, [])

    return (
        <>
            <div className="modal-wrapper2">
                <div className="modal-container2">

                    <i class="fa-solid fa-xmark" onClick={closeMenu}></i>


                    <div className="menu">
                        <div className="fir">This</div>
                        <br />
                        <div className="fir">is</div>
                        <br />
                        <div className="fir">for</div>
                        <br />
                        <div className="fir">placing</div>
                        <br />
                        <div className="fir">additional</div>
                        <br />
                        <div className="fir">options</div>
                        <br />
                        <div className="fir">to</div>
                        <br />
                        <div className="fir">find</div>
                        <br />
                        <div className="fir">more about</div>
                    </div>
                </div>


            </div>

        </>
    );
};


export default Menu;
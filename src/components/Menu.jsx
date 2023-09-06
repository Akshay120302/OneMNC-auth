import { useEffect} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './styles/Menu.css'

const Menu = ({closeMenu}) => {

    useEffect(() => {
    
        document.body.style.overflowY= "hidden";

      return () => {document.body.style.overflowY= "scroll";}
    }, [])
    

    // const handleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
    // const {name , value} = e.target

    // if( name === "productName"){
    //     setTaskName(value)
    // }
    // else{
    //     if(name === "productDes"){
    //     setDescription(value)
    //     }
    //     else{
    //         if(name === "product-image"){
    //         }
    //     }
    // }

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
            <br/>
            <div className="fir">options</div>
            <br />
            <div className="fir">to</div>
            <br />
            <div className="fir">find</div>
            <br />
            <div className="fir">more about</div>
            {/* <br />
            <div className="fir">the site</div> */}
            </div>

        {/* <ul className='ul'>
            
            <li className='li'>Home</li>
            <br/>
            <li className='li'>Group</li>
            <br/>
            <li className='li'>Products</li>
            <br/>
            <li className='li'>Tasks</li>
            <br/>
            <li className='li'>Leader Board</li>
        </ul> */}
    </div>
                    
       
        </div>

        </>
      );        
};


export default Menu;
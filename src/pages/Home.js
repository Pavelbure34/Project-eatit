import React from 'react';
import {Popuphooks} from '../hooks';
import {Logout} from '../funcs';
import {Button, Popup, NavBar, Icon} from '../components';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

const Home = (props)=>{
    const {onSignOut, user} = props;
    const {name, family_name} = user;

    let {
        show, popupMessage, popupTitle,
        showPopup, Close
    } = Popuphooks();

    return (
        <div id="home">
            <header>
                <NavBar name={name} family_name={family_name}/>
                {/* <div>
                    <Icon icon={faUserCircle} size="1x" color="#FFFFFF"/>
                    <b><p>{name} {family_name}</p></b>
                </div> */}
            </header>
            <div className="main-content">
                <section>

                </section>
                <section>
                    <Button
                        type="info"
                        onClick={()=>showPopup(
                            "Eat!T Terms",
                            `Eat!T utilizes school identification numbers and names
                            to identify the cutsomers when they pick up their own food.
                            You are to use your own identification number and 
                            show up and pick the food when the order is complete.`
                        )}>
                        View Eat!T Terms
                    </Button>
                    <Button onClick={()=>Logout(onSignOut,showPopup)}>
                        Sign Out
                    </Button>   
                </section>
            </div>
            <footer>
                <Popup show={show} header={popupTitle} onClose={Close}>
                    {popupMessage}
                </Popup>
            </footer>
        </div>
    );
};

export {Home};

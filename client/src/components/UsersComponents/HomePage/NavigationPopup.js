import React from "react";
import './HomePage.css';

function NavigationPopup(props){
    return(props.trigger)?(
        <div className="navigation-popup">
            <div className="navigation-popup-inner">
                <button className="close-bth" onClick={()=>props.setTrigger(false)}>close</button>
                <a href="https://ul.waze.com/ul?preview_venue_id=22806848.227806340.13314&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank">
                <img src={require('../../../images/icon-waze.png')} width="10%"
                     height="10%" alt="icon-waze"/>
                </a>
                <a href="https://goo.gl/maps/rd1eR8WrnqL7Ktcx9" target="_blank">
                <img src={require('../../../images/google-map-logo.jpg')} width="10%"
                     height="10%" alt="google-map-logo"/>
                </a>
                <a href="https://moovitapp.com/israel-1/poi/%D7%91%D7%99%D7%AA%20%D7%97%D7%95%D7%9C%D7%99%D7%9D%20%D7%95%D7%95%D7%9C%D7%A4%D7%A1%D7%95%D7%9F/t/en?tll=32.03652_34.761064" target="_blank">
                    <img src={require('../../../images/moovit-logo.jpg')} width="10%"
                     height="10%" alt="moovit-logo"/>
                </a>
                <a href="https://gett.com/il/diresnt/?shortlink=e0c54d76&pid=Web&c=DTA_IL_Web" target="_blank">
                    <img src={require('../../../images/get-texi-icon.png')} width="10%"
                         height="10%" alt="get-texi-icon"/>
                </a>
            </div>
        </div>
    ) : "";
}

export default NavigationPopup
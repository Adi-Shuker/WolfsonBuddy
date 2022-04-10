import MenuIcon from "./Icons/MenuIcon.js"
import styled from "styled-components";

const Title = styled.div`
   background-color: #FEB914;
   text-align: center;
   width: 100%;
`;


const MenuLine = styled.div`
   display: flex;
`;
const Header =() =>
{
    return (
    <div>
        <Title className="title" >
            <div>המרכז הרפואי על שם אידת וולפסון</div>
        </Title>
        <MenuLine>
            <img className='logo' src={require('../../images/wolfsonBuddyLogo.jpg')} width="40%"
                  alt="wolfsonBuddyLogo"/>
            <MenuIcon/>

        </MenuLine>

    </div>
    )

}

export default Header;

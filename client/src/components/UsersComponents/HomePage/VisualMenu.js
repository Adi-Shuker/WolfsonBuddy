import CarIcon from "../Icons/CarIcon";
import GameIcon from "../Icons/GamesIcon";
import TeamIcon from "../Icons/TeamIcon";
import NavIcon from "../Icons/NavIcon";
import NewsIcon from "../Icons/NewsIcon";
import styled from "styled-components";
const IconsCollection = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
        padding: 50px,50px,50px,50px;
    
    .iconWrapper{
    margin: 50px,50px,50px,50px;
    border-radius: 10px;
        border-size: 2px;
        border-style: solid;
        border-color:#2E388D;
        
        margin-left: 20px;
        
    }
`;

const VisualMenu =() =>
{
    return (
        <div>
            תפריט ויזואלי
            <IconsCollection>
                <div className="iconWrapper">
                    <CarIcon onClick={()=>{console.log("CarClicked")}}/>
                </div>
                <div className="iconWrapper">
                    <GameIcon/>
                </div>
                <div className="iconWrapper">
                    <TeamIcon/>
                </div>
                <div className="iconWrapper">
                    <NewsIcon/>
                </div>
                <div className="iconWrapper">
                    <NavIcon/>
                </div>





            </IconsCollection>


        </div>
    )

}

export default VisualMenu;

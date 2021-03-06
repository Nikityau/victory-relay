import React from 'react';
import {Link} from "react-router-dom";

//styles
import classes from './TeamCard.module.css'

const TeamCard = ({team}) => {
    const toTop = () => {
        window.scrollTo(0,0);
    }

    return (
        <div className={classes.teamCardContainer} onClick={toTop}>
            <Link to={`/user/team/${team.id}`}>
                <div className={classes.teamColor} style={{background: `#${team.color_code_hex}`}}/>
                <div className={classes.teamName}>
                    <h4>{team.name}</h4>
                </div>
            </Link>
        </div>
    );
};

export default TeamCard;
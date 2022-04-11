import React from 'react';
import '../HeaderOptions/HeaderOptions.css';
import {Avatar} from "@material-ui/core";



const Headeroptions = ({avatar,Icon,title}) => { //props-------> props.title
  return (
    <div className="headerOptions">
    {Icon && <Icon className="headerOption_icon" />}
    {avatar && <Avatar className="headerOptions_icon" src={avatar} />}
    <h3 className="headerOptions_title">{title}</h3>

    </div>
  );
}

export default Headeroptions;
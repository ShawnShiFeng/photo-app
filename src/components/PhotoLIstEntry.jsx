import React, {Component} from 'react';

var PhotoListEntry = (props) => (
    <div className="PhotoListEntry" onClick={()=>props.cb(props.pic)}>
        <p className="PhotoListEntry-text">
            {props.pic.title}
        </p>
    </div>
);

export default PhotoListEntry;
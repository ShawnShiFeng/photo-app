import React, {Component} from 'react';

var PhotoListEntry = (props) => (
    <div className="PhotoListEntry">
        <p className="PhotoListEntry-text">
            {props.pics.title}
        </p>
    </div>
);

export default PhotoListEntry;
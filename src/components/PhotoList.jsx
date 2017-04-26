import React, {Component} from 'react';
import PhotoListEntry from './PhotoListEntry';

var PhotoList = (props) => (

    <div className="PhotoList">
        <div className="PhotoList-header">
            {
                props.picList.map((item) => {
                    return <PhotoListEntry pic={item} cb={props.cb}/>
                })
            }

        </div>
    </div>

);

export default PhotoList;
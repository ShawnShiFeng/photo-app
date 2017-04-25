import React, {Component} from 'react';
import PhotoListEntry from './PhotoLIstEntry';

var PhotoList = (props) => (

    <div className="PhotoList">
        <div className="PhotoList-header">
            {
                props.picList.map((item) => {
                    return <PhotoListEntry pics={item} />
                })
            }

        </div>
    </div>

);

export default PhotoList;
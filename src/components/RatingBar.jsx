import React, {Component} from 'react';

var RatingBar = (props) => (
    <div className="RatingBar">
        <p> {props.rating} out of 5</p>
    </div>
);
export default RatingBar;
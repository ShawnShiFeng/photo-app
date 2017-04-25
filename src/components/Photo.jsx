import React, { Component } from 'react';
import RatingBar from './RatingBar';

var Photo = (props) => (
    <div className="Photo">
        <div className="Photo-header">
            <img className="Photo-view" src={props.pic.url}  />
        </div>

        <div className="Photo-title">
            <p>{props.pic.title}</p>
        </div>
        <div className="RatingBar-position">
          <RatingBar rating={props.pic.rating}/>
        </div>
    </div>
);
export default Photo;

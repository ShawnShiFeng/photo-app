import React, {Component} from 'react';


var DropDownMenu = (props) => (

        <div className="DropDownMenu">
          <select value={props.value} onChange={props.onRatingClicked}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
);






export default DropDownMenu;
       /*<div>
         <select value={this.state.selectValue}
         onChange={this.handleChange}
         >
            <option value="Orange">Orange</option>
            <option value="Radish">Radish</option>
            <option value="Cherry">Cherry</option>
          </select>
          <p>{message}</p>
          </div>        */

    /*<select>
            <option value="1"><DropDownMenuEntry rating="1" cb={props.cb}/></option>
            <option value="2"><DropDownMenuEntry rating="2" cb={props.cb}/></option>
            <option value="3"><DropDownMenuEntry rating="3" cb={props.cb}/></option>
            <option value="4"><DropDownMenuEntry rating="4" cb={props.cb}/></option>
            <option value="5"><DropDownMenuEntry rating="5" cb={props.cb}/></option>
    </select>*/


        {/*<div class="dropdown">
            <button class="dropbtn">Rating</button>
            <div class="dropdown-content">
                <a><DropDownMenuEntry rating="1" cb={props.cb}/></a>
                <a><DropDownMenuEntry rating="2" cb={props.cb}/></a>
                <a><DropDownMenuEntry rating="3" cb={props.cb}/></a>
                <a><DropDownMenuEntry rating="4" cb={props.cb}/></a>
                <a><DropDownMenuEntry rating="5" cb={props.cb}/></a>
            </div>
        </div>*/}
import React, {Component} from "react";
import on from './assets/on.png'
import off from './assets/off.png'

class Toggle extends Component{
    render(){
        return <div>
            <img src={this.props.output ? on : off}></img>
        </div>;
    }
}

export default Toggle ;
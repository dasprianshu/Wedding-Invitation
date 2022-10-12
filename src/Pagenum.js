import React, {Component} from "react";
import "./Pagenum.css";
import Toggle from "./Toggle";
class Pagenum extends Component{
    render(){
        return <div className="Toggles">
             
            <Toggle output={this.props.num == 1 ? true : false}/>
            <Toggle output={this.props.num == 2 ? true : false}/>
            <Toggle output={this.props.num == 3 ? true : false}/>
            <Toggle output={this.props.num == 4 ? true : false}/>
        </div>;
    }
}

export default Pagenum ;
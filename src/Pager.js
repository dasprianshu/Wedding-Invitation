import React, {Component} from "react";
import "./Pager.css";
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'

class Pager extends Component{
    render() {
        let imgSrc
        switch (this.props.num){
            case 1:
                imgSrc = img1;
                break;
            case 2:
                imgSrc = img2;
                break;
            case 3:
                imgSrc = img3;
                break;
            case 4:
                imgSrc = img4;
                break;
            default:
                imgSrc = null;
        }

        return <div className="Pager"> 
            <img src={imgSrc}></img> 
        </div> ;
    }
}

export default Pager ;
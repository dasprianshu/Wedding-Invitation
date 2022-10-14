import React, {Component} from 'react';
import './Card.css';
import Pager from './Pager';
import Pagenum from './Pagenum';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            pageNum : 1
        }
        this.navigateLeft = this.navigateLeft.bind(this);
        this.navigateRight = this.navigateRight.bind(this);
    }
// navigation functions========================================
    leftPage(curState) {
        return {pageNum : curState.pageNum - 1};
    }
    rightPage(curState) {
        return {pageNum : curState.pageNum + 1};
    }

    navigateLeft(){
        if(this.state.pageNum != this.props.minPage)
            this.setState(this.leftPage);
    }
    navigateRight(){
        if(this.state.pageNum != this.props.maxPage)
            this.setState(this.rightPage);
    }
// ===========================================================
    render(){
        return <div className="Card">
                <section className='Carousel'>
                    <Pager num={this.state.pageNum}/>
                </section>
                <div className='Pagenum'> 
                      <Pagenum num={this.state.pageNum}/>
                </div>
                <button onClick={this.navigateLeft} id='left-btn'>Left</button>
                <button onClick={this.navigateRight} id='right-btn'>Right</button>
        
            </div>;
    }
  
}

export default Card;

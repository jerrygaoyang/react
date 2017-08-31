import React, {Component} from 'react'
import {connect} from 'react-redux'
import action from '../store/actions/product'


class Product extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.product.name}</h1>
                <button onClick={this.props.handleClick}>测试</button>
            </div>
        )
    }
}

const mapState = (state)=>{
    return {
        product:state.product
    }
};

const mapDispatch = (dispatch)=>{
    return {
        handleClick(){
            dispatch(action.create())
        }
    }
};

export default connect(mapState, mapDispatch)(Product)


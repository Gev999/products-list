import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productRemoved, productWrited } from '../actions';

class ProductItem extends Component {

    removeProduct =() => {
        const {productRemoved, product} = this.props;
        productRemoved(product.id);
    }

    writeProduct = (e)=> {
        const { productWrited, product } = this.props;
        productWrited(e.target.value, product.id);
    }

    render(){
        const { product } = this.props;
        return (
            <React.Fragment>
                <div className="col"><h4 className="center-content">{product.id}</h4></div>
                <div className="col-8"><input type="text" className="form-control" value={product.name} 
                        onChange={this.writeProduct} placeholder="new product name..."/></div>
                <div className="col-3 d-flex button-div"><button className="btn btn-danger" 
                        onClick={this.removeProduct}>Remove</button></div>
            </React.Fragment>

        )
    }
}

const mapStateToProps = (state)=> {
    return {
        productList: state.productList
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        productRemoved: bindActionCreators(productRemoved, dispatch),
        productWrited: bindActionCreators(productWrited, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
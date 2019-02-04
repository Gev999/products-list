import React, {Component} from 'react';
import './product-table.css';
import { connect } from 'react-redux'
import { productCreated} from '../actions';
import {bindActionCreators} from 'redux'
import ProductItem from '../product-item'

class ProductTable extends Component {

    addProduct = (e) => {
        this.props.productAdded(e.target.value);
    }

    createProduct = ()=> {
        const {productList, productCreated} = this.props;
        const id = productList.length===0? -1: productList[productList.length - 1].id;
        const product = {
            id: id + 1,
            name: '',
        }
        productCreated(product);
    }

    render() {

        const productList = this.props.productList.map((product)=> {
                return (
                    <div className="row" key={product.id}>
                        <ProductItem product={product}/>
                    </div>
                )
        });

        return (
            <div className="container product-table">
                <div className="row">
                    <div className="col"><h3>ID</h3></div>
                    <div className="col-8"><h3>Product Name</h3></div>
                </div>
                {productList}
                <button className="btn btn-primary" onClick={this.createProduct}>Create</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        productList: state.productList
    }
}

const mapDispatcToProps = (dispatch)=> {
    return {
        productCreated: bindActionCreators(productCreated, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatcToProps)(ProductTable);
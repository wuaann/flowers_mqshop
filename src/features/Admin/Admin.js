import React from "react";
import { ReactDOM } from "react";
import axios from "axios";
import './Admin.css';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            id: null,
            name: "",
            price: "",
            avatar: "",
            category: false,
            showEditForm: false
        };
    }

    componentDidMount() {
        axios
            .get("https://63a57234318b23efa793aa31.mockapi.io/api/products")
            .then(response => {
                this.setState({ product: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    deleteBook = (id) => {
        axios
            .delete("https://63a57234318b23efa793aa31.mockapi.io/api/products/" + id)
            .then(response => {
                console.log(response);
                const product = this.state.product.filter(item => item.id !== id);
                this.setState({ product });
            })
            .catch(error => {
                console.log(error);
            });
    }

    addBook = () => {
        const Productlist = {
            tensp: this.state.tensp,
            gia: this.state.gia,
            soluong: this.state.soluong,
            hinhanh: this.state.hinhanh
        };
        axios
            .post("https://63a57234318b23efa793aa31.mockapi.io/api/products", Productlist)
            .then(response => {
                console.log(response);
                const product = [...this.state.product, response.data];
                this.setState({ product });
            })
            .catch(error => {
                console.log(error);
            });
    }

    editBook = (id) => {
        const Productlist = this.state.product.find(item => item.id === id);
        this.setState({
            id: id,
            tensp: Productlist.tensp,
            gia: Productlist.gia,
            soluong: Productlist.soluong,
            hinhanh: Productlist.hinhanh,
            showEditForm: true
        });
    }

    updateBook = () => {
        const Productlist = {
            tensp: this.state.tensp,
            gia: this.state.gia,
            soluong: this.state.soluong,
            hinhanh: this.state.hinhanh
        };
        axios
            .put("https://63a57234318b23efa793aa31.mockapi.io/api/products/" + this.state.id, Productlist)
            .then(response => {
                console.log(response);
                const product = this.state.product.map(item => {
                    if (item.id === this.state.id) {
                        return Productlist;
                    }
                    return item;
                });
                this.setState({ product, showEditForm: false });
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleInputChange = (e) => {
        this.setState({ hinhanh: e.target.value });
    }

    formAddBook = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Tên Sản Phẩm</label>
                                    <input type="text" className="form-control" value={this.state.tensp} onChange={(e) => this.setState({ tensp: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label>Giá</label>
                                    <input type="text" className="form-control" value={this.state.gia} onChange={(e) => this.setState({ gia: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label>Số Lượng</label>
                                    <input type="number" className="form-control" value={this.state.soluong} onChange={(e) => this.setState({ soluong: e.target.value })} />
                                </div>
                                <div className="form-group">
                                    <label>Hình ảnh</label>
                                    <input type="text" className="form-control" value={this.state.hinhanh} onChange={this.handleInputChange} />
                                </div>
                                <button type="button" className="btn btn-primary" onClick={this.addBook}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    formEditBook = () => {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Tên Sản Phẩm"
                    value={this.state.tensp}
                    onChange={e => this.setState({ tensp: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Giá"
                    value={this.state.gia}
                    onChange={e => this.setState({ gia: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Số Lượng"
                    value={this.state.soluong}
                    onChange={e => this.setState({ soluong: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Hình ảnh"
                    value={this.state.hinhanh}
                    onChange={this.handleInputChange}
                />
                <img src={this.state.hinhanh} alt="Hình ảnh" />

                <button onClick={this.updateBook}>Update</button>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="Title_table">Product</h4>
                                    <p className="card-text">
                                        <button className="AddBtn" onClick={() => this.setState({ showAddForm: true })}>Add Sản Phẩm Mới</button>
                                    </p>
                                    {this.state.showAddForm ? this.formAddBook() : null}

                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Tên Sản Phẩm</th>
                                            <th>Giá</th>
                                            <th>Số Lượng</th>
                                            <th>Hình ảnh</th>
                                            <th>Xóa</th>
                                            <th>Sửa</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.state.product.map(products => (
                                            <tr key={products.id}>
                                                <td>{products.id}</td>
                                                <td>{products.tensp}</td>
                                                <td>{products.gia}</td>
                                                <td>{products.soluong}</td>
                                                <td><img src={products.hinhanh} alt="Hình ảnh" /></td>
                                                <td><button className="deleteBtn" onClick={() => this.deleteBook(products.id)}>Delete</button></td>
                                                <td><button className="editBtn" onClick={() => this.editBook(products.id)}>Edit</button></td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.showEditForm ? this.formEditBook() : null}
            </div>
        );
    }
}

export default Admin;

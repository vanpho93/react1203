import React, { Component } from 'react';

export class ListWord extends Component {
    getFormHtml() {
        if (!this.props.isShowForm) return '';
        return (
            <div>
                <div className="form-group">
                    <label>En: </label>
                    <input className="form-control" />
                </div>
                <div className="form-group">
                    <label>Vn: </label>
                    <input className="form-control" />
                </div>
                <button className="btn btn-success">Add word</button>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <h3>{ this.props.title }</h3>
                List Word
                { this.getFormHtml() }
            </div>
        );
    }
}

// export default ListWord;

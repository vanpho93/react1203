import React, { Component } from 'react';

export class ListWord extends Component {
    render() {
    return (
            <div className="container">
                <h3>{ this.props.title }</h3>
                List Word
                <div className="form-group">
                    <label>En: </label>
                    <input className="form-control" />
                </div>
                <div className="form-group">
                    <label>Vn: </label>
                    <input className="form-control" />
                </div>
                <button class="btn btn-success">Add word</button>
            </div>
        );
    }
}

// export default ListWord;

import React, { Component } from "react";

export default class EditablePost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="EditablePost">
                {/* {Editable author field} */}
                <label htmlFor="authorField">Author: </label>
                <input type="text" name="authorField" id="authorField" value={this.props.author} />
                
                {/* {Editable location field} */}
                <label htmlFor="locationField">Location: </label>
                <input type="text" name="locationField" id="locationField" value={this.props.location} />
                
                {/* {Editable content field} */}
                <label htmlFor="contentField">Content: </label>
                <input type="text" name="contentField" id="contentField" value={this.props.content} />
            </div>
        )
    }
}
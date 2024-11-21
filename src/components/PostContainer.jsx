import React, { Component } from 'react';
import ReadOnlyPost from './ReadOnlyPost';
import EditablePost from './EditablePost';
import { isEditable } from '@testing-library/user-event/dist/utils';

export default class PostContainer extends Component {
    constructor(){
        super();
        this.state = {
            isEditing: false,
            author: "",
            dateCreated: Date.now(),
            location: "",
            content: "",
            lastUpdated: Date.now()
        }
    }

    toggleEditMode = () => {
        this.setState(
            {
                isEditing: !this.state.isEditing
            }
        )
    }

    updatePostData = (newAuthor, newLocation, newContent) => {
        this.setState({
            author: newAuthor,
            lastUpdated: Date.now(),
            location: newLocation,
            content: newContent
        })
    }

    render() {
        return (
            <>
                <button onClick={this.toggleEditMode}>Toggle Edit Mode</button>
                {
                    this.state.isEditing ?
                    <EditablePost
                        // Pass all of them using props, one at a time
                        author={this.state.author}
                        dateCreated={this.state.dateCreated}
                        location={this.state.location}
                        content={this.state.content}
                        lastUpdated={this.state.lastUpdated}
                        // Passing the function as a prop
                        updateData={this.updatePostData}

                        // Could pass the enitre state in one go
                        parentState={this.state}
                    /> :
                    <ReadOnlyPost 
                        // Pass all of them using props, one at a time
                        author={this.state.author}
                        dateCreated={this.state.dateCreated}
                        location={this.state.location}
                        content={this.state.content}
                        lastUpdated={this.state.lastUpdated}

                        // Could pass the enitre state in one go
                        parentState={this.state}
                    />
                }
            </>
        )
    }
}
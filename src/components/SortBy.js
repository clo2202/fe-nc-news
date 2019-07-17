import React, { Component } from 'react';

class SortBy extends Component {
    render() {
        const { sortBy } = this.props
        return (
            <div>
               <button onClick={() => sortBy('comment_count')}>Popular</button> 
               <button onClick={() => sortBy()}>Recent</button> 
               <button onClick={() => sortBy('votes')}>Rated</button> 
            </div>
        );
    }
}

export default SortBy;
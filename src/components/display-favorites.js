import React from 'react';
import { connect } from 'react-redux';
import { toggleAdvancedSearch } from '../actions/advanced-search';

import './advanced-search.css';

export class DisplayFavorites extends React.Component {

    render(){
        let searchArea;
        if (this.props.advancedSearch === false){
            searchArea = '';
        } else {
            searchArea = <SearchCriteria/>
        }
        return (
            <div className="advanced-search">
                <button className="toggle-search-btn" type="button" onClick={() => this.props.dispatch(toggleAdvancedSearch())}>More Search Criteria?</button>
                {searchArea}            
            </div>
        )
    }
}

const mapStateToProps = state => ({
    displayFavorites: state.displayFavorites,
});

export default connect(mapStateToProps)(DisplayFavorites);
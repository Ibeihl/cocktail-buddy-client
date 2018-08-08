import React from 'react';
import { connect } from 'react-redux';
import { toggleAdvancedSearch } from '../actions/advanced-search';
import SearchCriteria from './search-criteria';

export class AdvancedSearch extends React.Component {

    render(){
        let searchArea;
        if (this.props.advancedSearch === false){
            searchArea = '';
        } else {
            searchArea = <SearchCriteria/>
        }
        return (
            <div className="advanced-search">
                <button type="button" onClick={() => this.props.dispatch(toggleAdvancedSearch())}>More Search Criteria?</button>
                {searchArea}            
            </div>
        )
    }
}

const mapStateToProps = state => ({
    advancedSearch: state.advancedSearch
});

export default connect(mapStateToProps)(AdvancedSearch);
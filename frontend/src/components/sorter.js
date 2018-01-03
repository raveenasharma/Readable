import React from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { setSortBy } from 'actions/sort-by';

const Sorter = ({ content, sortBy, onSelectSortBy }) => {
  const getValueFromParams = ({ [content]: { type, order }}) => `${type}-${order}`;
  const getParamsFromValue = (value) => value.split('-');
  return (
    <div className='sorter'>
      <SelectField value={getValueFromParams(sortBy)} floatingLabelText="Sort By" fullWidth={true}
              onChange={(event, index, value) => onSelectSortBy(content)(...getParamsFromValue(value))}>
        <MenuItem value='voteScore-descending' primaryText="Vote Score: Highest to lowest" />
        <MenuItem value='voteScore-ascending' primaryText="Vote Score: Lowest to highest" />
        <MenuItem value='timestamp-descending' primaryText="Timestamp: Newest to oldest" />
        <MenuItem value='timestamp-ascending' primaryText="Timestamp: Oldest to newest" />
      </SelectField>
    </div>
  )
}

const mapStateToProps = ({ sortBy }) => ({
  sortBy
})

const mapDispatchToProps = (dispatch) => ({
  onSelectSortBy: (content) => (type, order) => dispatch(setSortBy(content, type, order))  
})

export default connect(mapStateToProps, mapDispatchToProps)(Sorter);
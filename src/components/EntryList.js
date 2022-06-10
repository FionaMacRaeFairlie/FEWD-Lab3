import React from 'react';
import Entry from './entry';

function EntryList({ filtered }) {
  const filteredItem = filtered.map(entry =>  
      <Entry key={entry.name} entry={entry} />); 
      return (
        <div>
          {filteredItem}
        </div>
      );
}

export default EntryList;
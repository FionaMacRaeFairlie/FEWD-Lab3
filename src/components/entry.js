import React from 'react'

const Entry = ({entry}) => {
    return (

        <div  key={entry.name} id={entry.name} >    
              <div className="card">
                <div className="card-body">
                        <h4 className="card-title">{entry.name}</h4>
                        <p className="card-text">
                            {entry.description}
                        </p>
                </div>
        </div>
        </div>
      
    );
};

export default Entry;




import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

function App() {
  return (
    <div className="ui container grid" style={{marginTop: '1%'}}>
      <div className='ui row'>
        <div className='column eight wide'>
          <SongList/>
        </div>
        <div className='column eight wide' style={{display: 'flex', alignItems: 'center',justifyContent: 'center'}}>
          <SongDetail/>
        </div>
      </div>
    </div>
  );
}

export default App;

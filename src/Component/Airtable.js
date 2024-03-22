import React from 'react';
import Navbar from '../Component/Navbar'

function Airtable() {
  return (
    <div >
        <Navbar/>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/apphhUTm6uU3NZcqt/shrfqAoiX3LDmYocR?backgroundColor=green"
        frameBorder="0"
        onWheel=""
        width="100%"
        height="533"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
        title="Airtable Form"
      ></iframe>
    </div>
  );
}

export default Airtable;

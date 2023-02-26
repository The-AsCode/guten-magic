import React, { useState } from 'react';
import './editor.scss'

export default function Edit() {

  const [ basicInfo, setBasicInfo ] = useState({
    fname: '',
    lname: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBasicInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));

  }

  return (
    <div>
      <h4>Bio</h4>
      <form>
          <label>
            First Name:
            <input type="text" name="fname" value={basicInfo.fname} onChange={handleChange}/>
          </label>
          <label>
            Last Name:
            <input type="text" name="lname" value={basicInfo.lname} onChange={handleChange}/>
          </label>
          <label>
            Address:
            <input type="text" name="address" value={basicInfo.address} onChange={handleChange}/>
          </label>          
      </form>
    </div>
  )
}

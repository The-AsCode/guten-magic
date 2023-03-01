import { TextControl, TextHighlight } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss'

export default function Edit() {

  const [ basicInfo, setBasicInfo ] = useState({
    fname: '',
    lname: '',
    address: ''
  });

  const handleChange = (e) => {
    // const { name, value } = e.target;

    console.log(e.target.name);

    // setBasicInfo((prevInfo) => ({
    //   ...prevInfo,
    //   [name]: value
    // }));

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

      {/* <TextControl
        label="First Name:"
        name="fname" 
        value={basicInfo.fname} 
        onChange={handleChange}
      />
      <TextControl
        label="Last Name:"
        name="lname" 
        value={basicInfo.lname} 
        onChange={handleChange}
      />
      <TextControl
        label="Address:"
        name="address" 
        value={basicInfo.address} 
        onChange={handleChange}
      /> */}
    </div>
  )
}

import { useState } from '@wordpress/element';
import './editor.scss'

export default function Edit( props ) {
    
    const {fname, lname, address} = props.attributes.basicInfoData;

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
        props.basicInfo(basicInfo);
      }
    
      return (
        <div>
          <h4>Bio</h4>
          <form>
              <label>
                First Name:
                <input type="text" name="fname" value={fname}  onChange={handleChange}/>
              </label>
              <label>
                Last Name:
                <input type="text" name="lname" value={lname} onChange={handleChange}/>
              </label>
              <label>
                Address:
                <input type="text" name="address" value={address} onChange={handleChange}/>
              </label>          
          </form>
        </div>
      )
  
}

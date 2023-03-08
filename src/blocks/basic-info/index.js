import { useState } from '@wordpress/element';

wp.blocks.registerBlockType('guten-magic/basic-info-data', {
    title: 'Basic Info',
    icon: 'admin-plugins',
    attributes: {
        basicInfoData: {
            type: 'object'
        },
    },

    edit: function({ attributes, setAttributes}){
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

            setAttributes({basicInfoData:basicInfo})

            console.log(attributes.basicInfoData)
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
    },

    save: function({ attributes }) {
        const { basicInfoData } = attributes;
        return(
            <div>
                <h3>First Name: {basicInfoData.fname}</h3>
                <h3>Last Name: {basicInfoData.lname}</h3>
            </div>
        );
    }
})
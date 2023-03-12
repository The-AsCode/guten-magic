import { useState } from '@wordpress/element';
import Edit from './edit';

wp.blocks.registerBlockType('guten-magic/basic-info-data', {
    title: 'Basic Info',
    icon: 'admin-plugins',
    attributes: {
        basicInfoData: {
            type: 'object'
        },
    },

    edit: function({ attributes, setAttributes}){
          const handleNewBasicInfo = (newBasicInfo) =>{
            setAttributes({basicInfoData:newBasicInfo})
          }
        
          return (
            <div>
              <Edit basicInfo={handleNewBasicInfo} attributes={attributes}/>
            </div>
          )
    },

    save: function({ attributes }) {
        const { basicInfoData } = attributes;
        console.log(basicInfoData);
        return(
            <div>
                <h3>First Name: {basicInfoData.fname} </h3>
                <h3>Last Name: {basicInfoData.lname} </h3>
                <h3>Address: {basicInfoData.address} </h3>
            </div>
        );
    }
})
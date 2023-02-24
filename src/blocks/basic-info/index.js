import Edit from "./edit";
import Save from "./save";

wp.blocks.registerBlockType('guten-magic/basic-info-data', {
    title: 'Basic Info',
    icon: 'admin-plugins',
    edit: function(){
        return <Edit />;
    },

    save: function() {
        return <Save />;
    }
})
wp.blocks.registerBlockType('guten-magic/testimonial', {
    title: 'Testemonial',
    icon: 'admin-plugins',
    edit: function(){
        return <h1>This is Testemonial Edit</h1>;
    },

    save: function() {
        return <h1>This is Testemonial view</h1>;
    }
})
wp.blocks.registerBlockType('guten-magic/first-guten-block', {
    title: 'osman',
    icon: 'dashicons-admin-plugins',
    edit: function(){
        return <h3>Hello from edit</h3>;
    },

    save: function() {
        return <h1>Hello from View</h1>;
    }
})
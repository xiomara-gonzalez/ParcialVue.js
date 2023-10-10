new Vue({
    el: '#app',
    data: {
        isSidebarOpen: false
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        }
    }
});

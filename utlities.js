const namelist = ['a','b','c', 'd', 'e','f','g','h','i','j'];

function getRandomName() {
    return namelist[Math.floor(Math.random() * namelist.length)];
}

Alpine.data('namelist', () => ({
    name: '',

    getname() {
        this.name = getRandomName();
    }
}));
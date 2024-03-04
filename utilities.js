function getRandomName() {
    const namelist = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    return {
        get name() {
            return namelist[Math.floor(Math.random() * namelist.length)];
        },
    }
}


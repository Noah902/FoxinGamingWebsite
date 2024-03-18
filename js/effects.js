const group = document.querySelector('.group');
for(let i = 1; i < 50; i++){
    const containerId = `iconContainer${i}`;
    const container = document.createElement('div');
    container.className = 'iconContainer';
    container.id = containerId;
    group.appendChild(container);
    addIcons(containerId)
}

function addIcons(containerId){
    const iconContainer = document.getElementById(containerId);
    const Unicode = [
        '\uf11b',
        '\uf1eb',
        '\uf1e2',
        '\uf008',
        '\uf135',
        '\uf011',
        '\uf390',
        '\uf109',
        '\uf544',
        '\uf091',
        '\uf11c',
        '\uf3fb',
        '\uf590',
        '\uf26c',
        '\uf54c',
        '\uf7c2',
        '\uf5fc',
        '\uf58f',
        '\ue4e9',
        '\ue4e5',


    ];

    for (let i = 0; i < 100; i++){
        const icon = document.createElement('i');
        icon.className = 'icon fas';
        icon.innerHTML = randomIcon(Unicode);
        iconContainer.appendChild(icon);
    }
}

// function to generate a randome unicode value

function randomIcon(values){
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}

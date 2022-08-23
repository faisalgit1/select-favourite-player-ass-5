function getPlayerNameVlueById(btnId, nameId) {
    document.getElementById(btnId).addEventListener('click', function () {
        const playerName = document.getElementById(nameId);
        const getPlayerName = playerName.innerText;

        const setButton = document.getElementById(btnId);
        setButton.setAttribute('disabled', '');
        document.getElementById(btnId).style.backgroundColor = 'gray';

        const setPlayerName = document.getElementById('player-name-list');
        const li = document.createElement('li');
        li.innerText = getPlayerName;
        const sizeOfLength = selectAllPlayer();
        if (sizeOfLength >= 5) {
            alert('You are select maximum five Players');
            document.getElementById(btnId).style.backgroundColor = 'red';
            return;
        }
        setPlayerName.appendChild(li)
    })
}

function selectAllPlayer() {
    const listItem = document.querySelectorAll('#player-name-list li');
    const selectName = [];
    for (const list of listItem) {
        selectName.push(list);
    }

    const allLength = selectName.length;
    return allLength;
}

getPlayerNameVlueById('btn-messi', 'messi');
getPlayerNameVlueById('btn-neymar', 'neymar');
getPlayerNameVlueById('btn-di-maria', 'di-maria');
getPlayerNameVlueById('btn-jake', 'jake');
getPlayerNameVlueById('btn-zidane-iqbal', 'zidane-iqbal');
getPlayerNameVlueById('btn-renato-sanches', 'renato-sanches');

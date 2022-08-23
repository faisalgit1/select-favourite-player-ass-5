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


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



function getInputValueById(valueId) {
    const inputField = document.getElementById(valueId);
    const inputAmountString = inputField.value;
    const inputAmount = parseFloat(inputAmountString);
    inputField.value = '';
    return inputAmount;
}

function getSetElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementAmountString = elementField.innerText;
    const elementAmount = parseFloat(elementAmountString);
    return elementAmount;

}

function setTextElementValueById(elementId, newValue) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = newValue;
}


document.getElementById('btn-calculate').addEventListener('click', function () {
    const playerInputAmount = getInputValueById('player-field');
    const size = selectAllPlayer();

    const setTotalAmount = size * playerInputAmount;
    document.getElementById('total-expenses-player').innerText = setTotalAmount

})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const managerCostAmount = getInputValueById('manager-field')
    const coachCostFieldAmount = getInputValueById('coach-field')

    const totalManagerAndCoachCost = managerCostAmount + coachCostFieldAmount;

    const previousTotalAmount = getSetElementValueById('balance-total')
    const expensesPlayerAmount = getSetElementValueById('total-expenses-player')

    const totalAmount = previousTotalAmount + totalManagerAndCoachCost + expensesPlayerAmount;
    setTextElementValueById('balance-total', totalAmount);

})
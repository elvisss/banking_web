async function renderAccounts () {
    const accounts = await getAccounts()
    const bodyAccounts = document.querySelector("#accountsTable tbody")
    
    let rowsHTML = ''

    accounts.forEach(function (account) {
        // console.log(account)
        rowsHTML += `<tr class="${account.balance === 0 ? 'table-danger' : ''}">
            <td>${account.id}</td>
            <td>${account.accountHolderName}</td>
            <td>${account.balance}</td>
            <td>
                <button data-account-id="${account.id}" type="button" class="js-btn-deposit btn btn-primary">
                    Deposit
                </button>
                <button type="button" class="btn btn-secondary">Withdraw</button>
            </td>
        </tr>`
    });

    bodyAccounts.innerHTML = rowsHTML
}

async function init () {
    await renderAccounts()
    
    const depositButtons = document.querySelectorAll(".js-btn-deposit")

    depositButtons.forEach(function (button) {
        button.addEventListener("click", async function(event) {
            console.log(event)
            const accountId = event.target.dataset.accountId;
            const amount = prompt("Enter deposit amount")
            if (!amount) {
                alert("Deposit failed")
                return
            }
            const response = await depositAmount(accountId, amount)
            location.reload();
        })
    })
}

init()
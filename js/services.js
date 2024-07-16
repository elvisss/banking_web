const BASE_URL = "http://localhost:8080/api"

async function getAccounts() {
    const response = await fetch(BASE_URL + "/accounts")
    if (!response.ok) {
        console.error(response)
        return
    }

    const data = await response.json()
    return data;
}

async function depositAmount(accountId, amount) {
    const url = `${BASE_URL}/accounts/${accountId}/deposit`
    const body = {
        amount: amount
    }

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        console.error(response)
        return
    }

    const data = await response.json()
    return data;
}
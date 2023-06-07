const conta = {
    id: '1',
    email: 'devdisciplinado@email.com',
    password: 'fullstack',
    name: 'Robson Godoy',
    balance: 20000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1500)
})
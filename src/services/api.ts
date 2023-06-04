const conta = {
    id: '1',
    email: 'rob@dio.me',
    password: 'fullstack',
    name: 'Robson Godoy',
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1500)
})
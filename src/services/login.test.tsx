import { login } from "./login";

describe('login', () => {
    
    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = 'rob@dio.me'

    it('Deve exibir um alert com boas vindas', async () => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo! ${mockEmail}`)
    })
})
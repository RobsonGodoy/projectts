import { getAllLocalStorage } from "./storage"

describe('storage', () => {

    it('Deve retornar o objeto no localStorage com a chave dioBank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith()
    })

})
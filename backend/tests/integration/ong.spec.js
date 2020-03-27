const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    /* TO DO! Ajeitar o beforeEach */ 
    // beforeEach(async () => {
    //     await await connection.migrate.rollback()
    //     .then(function() {
    //       return connection.migrate.latest();
    //     });
    // })

    afterAll(async () => {
        await connection.destroy()
    })
    /* Caso queira passar algo no header: request(app).post('/ongs').set('Authorization', 'value') */
    it('should be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name : "4 Patas",
            email: "teste@teste.com",
            whatsapp : "83988335869",
            city : "Rio do Sul",
            uf : "SC"
        })
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})
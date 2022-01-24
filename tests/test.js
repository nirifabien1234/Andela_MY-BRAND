
import request from 'supertest'

import app from '../index.js'
const {appExp} = app

describe('MY-BRAND', () => {
    it('GET /api/posts ---> array of posts', () => {
        return request(appExp)
            .get('/api/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                           title: expect.any(String),
                           desc: expect.any(String),
                           author: expect.any(String) 
                        }),
                    ])
                )
            })
    })
})

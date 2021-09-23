afterAll(() => {
  fastify.close()
})

describe('GET /', () => {
  it('should return 200', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/'
    })
    expect(response.statusCode).toEqual(200)
    const payload = response.json()
    expect(payload).toHaveProperty('hello')
    expect(payload.hello).not.toBeNull()
  })
})

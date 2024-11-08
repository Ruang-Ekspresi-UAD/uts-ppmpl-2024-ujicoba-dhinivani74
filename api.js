const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const fetchData = require('./script');

test('Should fetch data from API successfully', async () => {
    const mock = new MockAdapter(axios);
    const data = { message: 'Success' };

    // Buat mock response dari API
    mock.onGet('https://api.example.com/data').reply(200, data);

    const response = await fetchData();
    expect(response).toEqual(data);

    mock.restore();
});

test('Should handle API error', async () => {
    const mock = new MockAdapter(axios);

    // Simulasikan error dari API
    mock.onGet('https://api.example.com/data').reply(500);

    await expect(fetchData()).rejects.toThrow('Network response was not ok');

    mock.restore();
});

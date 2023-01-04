import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('test if the home endpoint is reached', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    });

    it('Valid url entered for image', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
    });


});


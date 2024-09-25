import supertest from 'supertest';
import { app } from '../src/app';
const http = require('http');

describe('Integration test (Active Regions)', () => {
    it('gets Active Regions', async () => {
        let httpServer = http.createServer(app);
        let server = httpServer.listen();
        let request = supertest.agent(server);
        const response = await request.get('/test');
        expect(response.body).toBe(false);
        await httpServer.close();
    });
});

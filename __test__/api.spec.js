const request = require('supertest');
const app = require('../app');
const port = 4000;
describe('api tests', () => {
	let api;
	beforeAll(() => {
		api = app.listen(port, () => `Test server running on port ${port}`);
	});
	afterAll((done) => {
		console.log(`stopping test server gracefully`);
		api.close(done);
	});
	it('should return 200', (done) => {
		request(app).get('/').expect(200, done);
	});
});

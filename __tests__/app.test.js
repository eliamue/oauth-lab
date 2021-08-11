const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('oauth-lab routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('displaying logged in user', async () => {
    const res = await request(app).get('/api/v1/auth/login');

    expect(res.body).toEqual({
      username: 'user1',
      avatarUrl: 'avatar_url',
    });
  });
});

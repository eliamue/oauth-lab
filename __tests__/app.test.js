const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('oauth-lab routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('posts a tweet', async => {
    
  });
});

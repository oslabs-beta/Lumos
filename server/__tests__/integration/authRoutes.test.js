import { request } from 'supertest';

import server from '../../server.ts';
import prisma from '../../db';

describe('auth route integration tests', () => {
  it('should not add new user to db when inputs are invalid', () => {
    request(server).post('/auth/register/local').expect(400);
  });

  it.todo('should add new user to db with valid email and password');
  it.todo('auth process should fail with invalid credentials');
  it.todo('session should persist after authentication');
  it.todo('session should terminate after logout');
});

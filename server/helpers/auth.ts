import * as bcrypt from 'bcrypt';

export function comparePasswords(password: string | Buffer, hash: string) {
  return bcrypt.compare(password, hash);
}

export function hashPassword(password: string | Buffer) {
  return bcrypt.hash(password, 10);
}

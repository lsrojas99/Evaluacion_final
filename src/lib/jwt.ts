import jwt from 'jsonwebtoken'
import { Usuario, UserTokenPayload } from '../models/dto/Usuario'

const secret = process.env.JWT_SECRET || 'secret'

export function generateToken(user: Usuario): string {
  return jwt.sign(
    { id: user.id, email: user.email },
    secret,
    { expiresIn: '7d' }
  )
}

export function verifyToken(token: string): UserTokenPayload {
  const verified = jwt.verify(token, secret)
  return verified as UserTokenPayload
}

import { type IronSession, type SessionOptions } from 'iron-session'

import { envVars } from './envVars'

export const sessionOptions: SessionOptions = {
  password: envVars.IRON_SESSION_SECRET,
  cookieName: `dapp-console-api.${envVars.DEPLOYMENT_ENV}.auth.session-token`,
  ttl: 60 * 60 * 24 * 14, // 14 days
  cookieOptions: {
    secure: true,
    sameSite: 'none',
    httpOnly: true,
  },
}

export type SessionData = {
  admin?: {
    isActive: boolean
    createdAt: string
  }
}

export type Session = IronSession<SessionData>

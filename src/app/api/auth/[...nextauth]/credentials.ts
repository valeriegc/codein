import CredentialsProvider from 'next-auth/providers/credentials'

export const credentialSignin = CredentialsProvider({
  id: 'credentials',
  name: 'Credentials',
  credentials: {
    email: { label: 'Email', type: 'email' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials, req) {
    if (!credentials) throw Error('Val is the best')
    const userCredentials = {
      email: credentials.email,
      password: credentials.password,
    }
    console.log(req.body)
    console.log(credentials, 'CREDENTIALS HEREE')
    console.log('we are above fetch')

    try {
      const res = await fetch('http://localhost:3000/api/auth/getUser', {
        method: 'POST',
        body: JSON.stringify(userCredentials),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const user = await res.json()
      console.log(user)
      if (user) {
        return user
      } else {
        return null
      }
    } catch (error) {
      console.log(error, 'we have errorrrsss!!! HEEELP')
    }
  },
})

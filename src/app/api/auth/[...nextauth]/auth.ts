import { prisma } from '../../../../../prisma/prisma'

export const handle = async (req, res) => {
  if (req.method === 'POST') {
    await handleUserLogin(req, res)
  } else {
    return res.status(405)
  }
}

const handleUserLogin = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'invalid inputs' })
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        name: true,
        password: true,
        employer: true,
        stack: true,
        languages: true,
        interests: true,
        image: true,
        experience: true,
        connections: true,
      },
    })
    if (user && user.password == password) {
      return res.status(200).json(remove(user, password))
      // need to find a method to exclude the password!
    } else {
      return res.status(401).json({ message: 'invalid credentials' })
    }
  } catch (e) {
    throw new Error(e)
  }
}

const remove = (user, keys) => {
  for (let key of keys) {
    delete user[key]
  }
  return user
}

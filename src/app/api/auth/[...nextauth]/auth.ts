import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../../../prisma/prisma'
import { User } from '@prisma/client'
import { type } from 'os'
type ResponseData =
  | {
      message: string
    }
  | Partial<User>

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not allowed' })
  }
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
      //@ts-ignore
      delete user.password
      return res.status(200).json(user)
      // need to find a method to exclude the password!
    } else {
      return res.status(401).json({ message: 'invalid credentials' })
    }
  } catch (e) {
    //@ts-ignore
    return res.status(500).json({ message: e })
  }
}

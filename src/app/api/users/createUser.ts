import { Prisma } from '@prisma/client'
import { prisma } from '../../../../prisma/prisma'

export const create = async (req, res) => {
  if (req.method === 'POST') {
    await createUserHandler(req, res)
  } else {
    return res.status(405).json({ message: 'Method Not allowed' })
  }
}

const createUserHandler = async () => {
  let errors = []
  const { name, email, password } = req.body

  try {
    const user = await prisma.user.create({
      data: { ...req.body },
    })
    return res.status(201).json(user)
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return res.status(400).json({ message: e.message })
      }
      return res.status(400).json({ message: e.message })
    }
  }
}

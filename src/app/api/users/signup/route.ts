import { Prisma } from '@prisma/client'
import { prisma } from '../../../../../prisma/prisma'

export const POST = async (req: Request) => {
  //add error handling later
  let errors = []
  const formData = await req.formData()
  const name = formData.get('name')?.toString()
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()
  const confirmPass = formData.get('confirmPass')?.toString()
  const employer = ''

  if (!name || !email || !password || !confirmPass) {
    return new Response('Missing form data', { status: 400 })
  }

  try {
    const user = await prisma.user.create({
      data: { name, email, password, employer },
    })
    return new Response('User created successfully.', { status: 201 })
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      return new Response('User creation unsuccessful', {
        status: 500,
      })
    }
  }
}

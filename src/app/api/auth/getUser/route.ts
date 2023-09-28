import { prisma } from '../../../../../prisma/prisma'

export const POST = async (req: Request) => {
  const { email, password } = await req.json()
  if (!email || !password) {
    return new Response('Missing login data', { status: 400 })
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
      return new Response(JSON.stringify(user), { status: 200 })
    } else {
      console.log('wrong password, oh no')
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), {
        status: 401,
      })
    }
  } catch (e) {
    console.log('something is fucked up here: ', e)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
    })
  }
}

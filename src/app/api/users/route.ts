import { prisma } from '../../../../prisma/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

import { PrismaClient } from "@prisma/client";
import { CreateUsuario, LoginUsuario, UpdateUsuario, Usuario } from "../dto/Usuario";

const prisma = new PrismaClient()

export default class UsuarioRepository {
  public readonly findAll = async (): Promise<Usuario[]> => {
    const users = await prisma.user.findMany()
    const usersWithoutPassword = users.map(user => {
      const { password, ...userWithoutPassword } = user
      return userWithoutPassword
    })
    return usersWithoutPassword
  }
  
  public readonly findById = async (id: number): Promise<Usuario| undefined> => {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })

    if (!user) return
    
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  }

  public readonly findByEmail = async (email: string): Promise<LoginUsuario | undefined>  => {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!user) return
    
    return user
  }

  public readonly create = async (user: CreateUsuario): Promise<Usuario> => {
    const newUser = await prisma.user.create({
      data: user
    })
    const { password, ...userWithoutPassword } = newUser
    return userWithoutPassword
  }

  public readonly update = async (id: number, user: UpdateUsuario): Promise<void> => {
    await prisma.user.update({
      where: {
        id
      },
      data: user
    })
  }

  public readonly delete = async (id: number): Promise<void> => {
    await prisma.user.delete({
      where: {
        id
      }
    })
  }
}
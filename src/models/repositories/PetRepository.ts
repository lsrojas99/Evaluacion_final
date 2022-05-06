import { Pet, PrismaClient } from "@prisma/client";
import { CreateMain, UpdateMain, Main } from "../dto/Main"

const prisma = new PrismaClient()

export default class PetRepository {
  private userId: number

  constructor (userId: number) {
    this.userId = userId
  }
  
  public readonly findAll = async (): Promise<Main[]> => {
    const pets: Pet[] = await prisma.pet.findMany({
      where: {
        userId: this.userId
      }
    })
    return pets
  }
  
  public readonly findById = async (id: number): Promise<Main | undefined> => {
    const pet = await prisma.pet.findFirst({
      where: {
        id,
        userId: this.userId
      }
    })

    if (!pet) return
    
    return pet
  }

  public readonly create = async (pet: CreateMain): Promise<Main> => {
    const newPet = await prisma.pet.create({
      data: {
        ...pet,
        userId: this.userId,
        birth: new Date(pet.birth).toISOString()
      }
    })

    return newPet
  }

  public readonly update = async (id: number, pet: UpdateMain): Promise<void> => {
    await prisma.pet.updateMany({
      where: {
        id,
        userId: this.userId
      },
      data: {
        ...pet,
        birth: pet.birth ? new Date(pet.birth).toISOString() : undefined
      }
    })
  }

  public readonly delete = async (id: number): Promise<void> => {
    await prisma.pet.deleteMany({
      where: {
        id,
        userId: this.userId
      }
    })
  }
}
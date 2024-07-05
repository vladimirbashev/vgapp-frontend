export interface UserInterface {
  id: number
  email: string
  createdate: string
  updatedate: string
  username: string
}

export type UserNullableType = UserInterface | null
export type UserType = UserInterface

import { apiInstanse } from "@/api"

export const registerUser = async (email: string) => {
    return await apiInstanse.post('/users/', { email })
}

export const checkUnregisteredUser = async (email: string) => {
    return await apiInstanse.post('/users/unregistered', { email })
}

import { ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component loaded")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1= new User(1,"Burak","Öğretici","Istanbul")
let user2= new User(2,"Fatih","Öğretici","Istanbul")


userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))



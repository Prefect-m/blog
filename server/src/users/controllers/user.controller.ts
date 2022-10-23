import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe
} from '@nestjs/common'
import { UserI } from '../models/user.interface';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {

  constructor(
    private readonly userService: UserService
  ) { }

  /**
   * @returns 
   */
  @Get()
  findAll() {
    return this.userService.findAll()
  }

  /**
   * @param id 
   * @returns 
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id)
  }

  /**
   * @param user 
   */
  @Post('create')
  createUser(@Body() user: UserI) {
    return this.userService.createUser(user)
  }

  /**
   * @param id 
   */
  @Delete('delete/:id')
  delteUser(@Param('id', ParseIntPipe) id: number) {
    this.userService.deleteOne(id)
    return { message: 'Удален' }
  }

  /**
   * @param id 
   * @param user 
   * @returns 
   */
  @Put('update/:id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UserI) {
    this.userService.updateOne(id, user)
    return { message: 'Обнолен' }
  }
}
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = process.env.PORT || 4100
const start = async () => {
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT)
}
start()
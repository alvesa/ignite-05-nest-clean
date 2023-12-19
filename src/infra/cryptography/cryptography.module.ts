import { Module } from '@nestjs/common'
import { BcryptHasher } from './bcrypt-hasher'
import { Encrypter } from '@/domain/forum/application/cryptography/encrypter'
import { JwtEncrypter } from './jwt-encrypter'
import { HasheComparer } from '@/domain/forum/application/cryptography/hashe-comparer'
import { HasheGenerator } from '@/domain/forum/application/cryptography/hashe-generator'

@Module({
  providers: [
    {
      provide: Encrypter,
      useClass: JwtEncrypter,
    },
    {
      provide: HasheComparer,
      useClass: BcryptHasher,
    },
    {
      provide: HasheGenerator,
      useClass: BcryptHasher,
    },
  ],
  exports: [Encrypter, HasheComparer, HasheGenerator],
})
export class CryptographyModule {}

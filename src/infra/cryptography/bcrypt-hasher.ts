import { HasheComparer } from '@/domain/forum/application/cryptography/hashe-comparer'
import { HasheGenerator } from '@/domain/forum/application/cryptography/hashe-generator'
import { compare, hash } from 'bcryptjs'

export class BcryptHasher implements HasheGenerator, HasheComparer {
  private HASH_SALT_LENGTH = 8
  hash(plain: string): Promise<string> {
    return hash(plain, this.HASH_SALT_LENGTH)
  }

  compare(plain: string, hash: string): Promise<boolean> {
    return compare(plain, hash)
  }
}

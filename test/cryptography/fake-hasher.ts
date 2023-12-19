import { HasheComparer } from '@/domain/forum/application/cryptography/hashe-comparer'
import { HasheGenerator } from '@/domain/forum/application/cryptography/hashe-generator'

export class FakeHasher implements HasheGenerator, HasheComparer {
  async compare(plain: string, hash: string): Promise<boolean> {
    return plain.concat('-hashed') === hash
  }

  async hash(plain: string): Promise<string> {
    return plain.concat('-hashed')
  }
}

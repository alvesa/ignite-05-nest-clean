# Docker
- `docker-compose up -d`

# Prisma

- `pnpm prisma init`
- `pnpm prisma migrate dev`
- `pnpm prisma studio`

# SSL Certificate

- `openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048`
- `openssl rsa -pubout -in private_key.pem -out public_key.pem `
- `base64 public_key.pem > public_key-base64.txt`
- `base64 private_key.pem > private_key-base64.txt`
import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface CommentProps {
  authorId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date
}

export abstract class Comment<
  Props extends CommentProps,
> extends Entity<Props> {
  get content(): string {
    return this.props.content
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  get authorId(): UniqueEntityID {
    return this.props.authorId
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt
  }

  get excerpt(): string {
    return this.content.substring(0, 120).trim().concat('...')
  }

  private touch(): void {
    this.props.updatedAt = new Date()
  }
}

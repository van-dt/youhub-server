import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class FileResponse {
  @Field()
  id: string

  @Field({nullable: true})
  size?: string | null
}
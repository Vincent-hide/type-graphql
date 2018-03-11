import { GraphQLSchema, GraphQLScalarType } from "graphql";

import { SchemaGenerator, SchemaGeneratorOptions } from "../schema/schema-generator";

export interface BuildSchemaOptions extends SchemaGeneratorOptions {
  resolvers: Function[];
}
export function buildSchema(options: BuildSchemaOptions): Promise<GraphQLSchema> {
  return SchemaGenerator.generateFromMetadata(options);
}
import { Static, Type } from "@sinclair/typebox";
import { FastifyPluginAsync } from "fastify";

const PostRequestSchema = Type.Object({
  comment: Type.String(),
});
type PostRequest = Static<typeof PostRequestSchema>;

const PostResponseSchema = PostRequestSchema;
type PostResponse = Static<typeof PostResponseSchema>;

const root: FastifyPluginAsync = async (fastify) => {
  fastify.post<{
    Body: PostRequest;
    Reply: PostResponse;
  }>(
    "/",
    {
      schema: {
        body: PostRequestSchema,
        response: { 200: PostResponseSchema },
      },
    },
    async (request, reply) => {
      const reqBody = request.body;

      await new Promise((resolve) => setTimeout(resolve, 3000)); // wait 3s

      const response: PostResponse = {
        comment: `${reqBody.comment}のレスポンス`,
      };
      reply.send(response);
    }
  );
};

export default root;

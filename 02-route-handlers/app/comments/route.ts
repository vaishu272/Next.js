import { type NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filterComments);
  //?query=comment -> will return comments that include "comment" in their text used
  //  in filterComments, sorting, pagination, search etc.
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.text) {
      return Response.json(
        {
          message: "Comment text is required",
        },
        {
          status: 400,
        },
      );
    }

    const newComment = {
      id: comments.length + 1,
      text: body.text,
    };

    comments.push(newComment);

    return Response.json(newComment, {
      status: 201,
    });
  } catch {
    return Response.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}

import prisma from "@/lib/db";
import { caller } from "@/trpc/server";

async function Page() {
  const users = await caller.getUser();
  return <div>{JSON.stringify(users)}</div>;
}

export default Page;

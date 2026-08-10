import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

async function Page() {
  await requireAuth();
  const data = await caller.getUser();
  return (
    <div>
      <h1>protected:{JSON.stringify(data, null, 2)}</h1>
    </div>
  );
}

export default Page;

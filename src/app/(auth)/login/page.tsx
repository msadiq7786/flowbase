import { LoginForm } from "@/features/auth/components/login-form";
import { requireUnauth } from "@/lib/auth-utils";
import React from "react";

async function LoginPage() {
  await requireUnauth();
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <LoginForm />
    </div>
  );
}

export default LoginPage;

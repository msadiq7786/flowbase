import { LoginForm } from "@/features/auth/components/login-form";
import { requireUnauth } from "@/lib/auth-utils";

async function LoginPage() {
  await requireUnauth();
  return (
    <div className="flex-1 flex items-center justify-center">
      <LoginForm />
    </div>
  );
}

export default LoginPage;

import { RegisterForm } from "@/features/auth/components/signup-form";
import { requireUnauth } from "@/lib/auth-utils";

async function SignUpForm() {
  await requireUnauth();
  return (
    <div className="flex-1 flex items-center justify-center">
      <RegisterForm />
    </div>
  );
}

export default SignUpForm;

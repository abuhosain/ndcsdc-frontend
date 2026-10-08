"use client";

import { useState } from "react";
import { Link, useRouter } from "@/i18n/navigation";
import { Mail, Lock, User } from "lucide-react";
import { toast } from "sonner";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { signupAction } from "./actions";

type FormData = { name: string; email: string; password: string };
type FormErrors = Partial<FormData>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address.";
  if (!data.password) errors.password = "Password is required.";
  else if (data.password.length < 8) errors.password = "Password must be at least 8 characters.";
  return errors;
}

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    try {
      await signupAction(form);
      toast.success("Account created! Welcome aboard.");
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white border border-gray-200 rounded-2xl px-8 py-10 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Create account</h1>
          <p className="mt-1 text-sm text-gray-500">Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <Input
            label="Full name"
            type="text"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            leftIcon={<User className="w-4 h-4" />}
            placeholder="Jane Smith"
          />

          <Input
            label="Email address"
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            leftIcon={<Mail className="w-4 h-4" />}
            placeholder="you@example.com"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange}
            error={errors.password}
            leftIcon={<Lock className="w-4 h-4" />}
            placeholder="Min. 8 characters"
            hint="Use at least 8 characters with letters and numbers."
          />

          <Button type="submit" fullWidth loading={loading} size="lg">
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-brand-600 hover:text-brand-700">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

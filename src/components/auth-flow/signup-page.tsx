import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Ticket, Mail, Lock, Loader2 } from "lucide-react";
import {
  signUpFormSchema,
  type SignUpFormValues,
} from "@/utils/constant/form-schema/auth-schema";
import { FormInput } from "../shared/form/form-input";
import { FormMultiSelect } from "../shared/form/form-select";
import { PREFERENCE_OPTIONS } from "@/utils/constant/form-schema/preference";
import { toast } from "sonner";
import { useRequest } from "@/api/hooks/useRequest";
import { register } from "@/api/service/auth.service";

const SignupPage = () => {
  const navigate = useNavigate();
  const { queryFn: registerFn, loading: isLoading } = useRequest(
    register,
    "register"
  );

  const form = useForm<SignUpFormValues>({
    mode: "onChange",
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      preference: [],
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: SignUpFormValues) => {
    registerFn(values, {
      onSuccess: () => {
        toast.success("Registration successful! Verify email to continue");
        navigate("/login");
      },
      onError: (error) => {
        toast.error(`${error}`);
      },
    });
  };

  return (
    <div className="min-h-fit flex items-center justify-center bg-muted/30 px-4 py-12">
      <Card className="w-full max-w-lg shadow-xl">
        <CardHeader className="space-y-1 text-center pb-8">
          <div className="flex justify-center mb-4">
            <Link to="/" className="flex items-center space-x-2">
              <Ticket className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl">Ticketo</span>
            </Link>
          </div>
          <CardTitle className="text-3xl font-bold">Join Ticketo</CardTitle>
          <CardDescription className="text-base">
            Create your account and start discovering amazing events
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormInput
                control={form.control}
                name="email"
                label="Email Address"
                placeholder="you@example.com"
                type="email"
                icon={Mail}
                required
              />

              <FormMultiSelect
                control={form.control}
                name="preference"
                label="What event do your like?"
                // placeholder="Select your preferences"
                options={PREFERENCE_OPTIONS}
                maxSelections={5}
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FormInput
                    control={form.control}
                    name="password"
                    label="Password"
                    placeholder="••••••••"
                    type="password"
                    icon={Lock}
                    required
                  />
                </div>

                <FormInput
                  control={form.control}
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="••••••••"
                  type="password"
                  icon={Lock}
                  required
                />
              </div>

              <div className="bg-muted/50 rounded-lg p-3 text-xs space-y-1">
                <p className="font-medium">Password must contain:</p>
                <ul className="space-y-0.5 ml-4 list-disc text-muted-foreground">
                  <li>At least 8 characters</li>
                  <li>Uppercase and lowercase letters</li>
                  <li>At least one number</li>
                  <li>Special character (recommended)</li>
                </ul>
              </div>

              <Button
                type="submit"
                className="w-full h-11 text-base"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Creating your account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 pt-6">
          <Separator />
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary hover:underline"
            >
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignupPage;

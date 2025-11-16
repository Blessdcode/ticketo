import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ticket, Loader2, ArrowLeft, Lock } from "lucide-react";
import { FormInput } from "../shared/form/form-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  resetPasswordFormSchema,
  type ResetPasswordFormValues,
} from "@/utils/constant/form-schema/auth-schema";
import { Form } from "../ui/form";
import { toast } from "sonner";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ResetPasswordFormValues>({
    mode: "onChange",
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (values: ResetPasswordFormValues) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Password reset complete", {
        description: "Password reset successfully!",
      });
      console.log("reset values:", values);
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-fit flex items-center justify-center bg-gradient-to-br from-muted/50 via-background to-muted/30 px-4 py-12">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Link to="/" className="flex items-center space-x-2">
              <Ticket className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl">Ticketo</span>
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold">Reset password</CardTitle>
          <CardDescription>Enter your new password </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
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
              <Button
                type="submit"
                className="w-full h-11 text-base"
                disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Resetting password...
                  </>
                ) : (
                  "Reset password"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 pt-6 pb-8">
          <div className="w-full space-y-3">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  Remember your password?
                </span>
              </div>
            </div>

            <Button variant="outline" asChild className="w-full h-11">
              <Link to="/login">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
              </Link>
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-primary hover:underline">
              Sign up for free
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResetPasswordPage;

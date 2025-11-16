import { useState } from "react";
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
import { Ticket, Mail, Loader2 } from "lucide-react";
import {
  forgetPassword,
  type ForgetPasswordFormValues,
} from "@/utils/constant/form-schema/auth-schema";
import { FormInput } from "../shared/form/form-input";
import { toast } from "sonner";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ForgetPasswordFormValues>({
    mode: "onChange",

    resolver: zodResolver(forgetPassword),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: ForgetPasswordFormValues) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Password forgotten", {
        description: "Password forgotten successfully!",
      });
      console.log("forgot values:", values);
      navigate("/reset-password");
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-fit flex items-center justify-center bg-muted/30 px-4 py-12">
      <Card className="w-full max-w-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Link to="/" className="flex items-center space-x-2">
              <Ticket className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl">Ticketo</span>
            </Link>
          </div>
          <CardTitle className="text-2xl font-bold">Forgotten password</CardTitle>
          <CardDescription>
            Enter your email to reset password
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

              <Button
                type="submit"
                className="w-full h-11 text-base"
                disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Forgetting password...
                  </>
                ) : (
                  "Forget Password"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <Separator />
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;

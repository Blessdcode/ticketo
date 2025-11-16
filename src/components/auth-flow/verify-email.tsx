/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  verifyUser,
  type VerifyUserEmail,
} from "@/utils/constant/form-schema/auth-schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ticket } from "lucide-react";

const VerifyEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const email = (location.state as { email?: string })?.email;

  const verify = useForm<VerifyUserEmail>({
    mode: "onChange",
    resolver: zodResolver(verifyUser),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = async (values: VerifyUserEmail) => {
    if (!email) {
      toast.error("No email found", {
        description: "Please go back and sign up again.",
      });
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Email Verified", {
        description: "Email verified successfully!",
      });
      console.log("verify values:", values);

      navigate("/login");
      setIsLoading(true);
    } catch (err) {
      toast.error("Network error", {
        description: "Please check your connection and try again.",
      });
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
          <CardTitle className="text-2xl font-bold">
            Verify Your Email
          </CardTitle>
          <CardDescription>
            We sent a 5-digit code to{" "}
            <span className="font-semibold">{email}</span>. Enter it below to
            continue.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...verify}>
            <form
              onSubmit={verify.handleSubmit(onSubmit)}
              className="space-y-8">
              <FormField
                control={verify.control}
                name="pin"
                render={({ field }) => (
                  <FormItem className="text-center">
                    <FormDescription className="font-semibold text-md text-black text-center">
                      Please enter the pin sent to your email.
                    </FormDescription>
                    <FormControl>
                      <div className="flex justify-center">
                        <InputOTP maxLength={5} {...field}>
                          <InputOTPGroup className="flex gap-2">
                            {[0, 1, 2, 3, 4].map((i) => (
                              <InputOTPSlot
                                key={i}
                                index={i}
                                aria-label={`Digit ${i + 1}`}
                                className="w-12 h-12 text-xl border-2 rounded-lg focus:ring-2 focus:ring-secondaryMain"
                              />
                            ))}
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full h-11 text-base"
                disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Verifying email...
                  </>
                ) : (
                  "Verify email"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyEmail;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ticket, Mail, Loader2, ArrowLeft, CheckCircle2 } from "lucide-react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Replace with actual password reset logic
      console.log("Password reset requested for:", email);

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTryAnother = () => {
    setIsSuccess(false);
    setEmail("");
    setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/50 via-background to-muted/30 px-4 py-12">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="space-y-1 text-center pb-8">
          <div className="flex justify-center mb-4">
            <Link to="/" className="flex items-center space-x-2">
              <Ticket className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl">Ticketo</span>
            </Link>
          </div>

          {isSuccess ? (
            <>
              <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle className="text-3xl font-bold">
                Check your email
              </CardTitle>
              <CardDescription className="text-base pt-2">
                We've sent password reset instructions to
              </CardDescription>
              <p className="text-sm font-semibold text-primary pt-1">{email}</p>
            </>
          ) : (
            <>
              <CardTitle className="text-3xl font-bold">
                Reset Password
              </CardTitle>
              <CardDescription className="text-base pt-2">
                Enter your email address and we'll send you instructions to
                reset your password
              </CardDescription>
            </>
          )}
        </CardHeader>

        <CardContent>
          {isSuccess ? (
            <div className="space-y-5">
              {/* Instructions */}
              <div className="space-y-3 text-sm">
                <p className="font-medium">Next steps:</p>
                <ol className="space-y-2 ml-4 list-decimal text-muted-foreground">
                  <li>Check your email inbox for our message</li>
                  <li>Click the reset link in the email</li>
                  <li>Create a new secure password</li>
                  <li>Log in with your new password</li>
                </ol>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <Button
                  className="w-full h-11"
                  onClick={handleResend}
                  disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Resending email...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Resend Email
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  className="w-full h-11"
                  onClick={handleTryAnother}>
                  Try another email
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-11 h-12 text-base"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                  />
                </div>
                {error && <p className="text-sm text-destructive">{error}</p>}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 text-base"
                disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending reset link...
                  </>
                ) : (
                  <>
                    <Mail className="mr-2 h-5 w-5" />
                    Send Reset Link
                  </>
                )}
              </Button>

              {/* Security Info */}
            </form>
          )}
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 pt-6 pb-8">
          {!isSuccess && (
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
                <Link to="/auth/login">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Login
                </Link>
              </Button>
            </div>
          )}

          {isSuccess && (
            <Button variant="ghost" asChild className="w-full">
              <Link to="/auth/login">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Login
              </Link>
            </Button>
          )}

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              to="/auth/signup"
              className="font-semibold text-primary hover:underline">
              Sign up for free
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;

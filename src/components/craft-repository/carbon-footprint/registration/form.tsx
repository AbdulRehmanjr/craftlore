"use client";
import { useState } from "react";
import { LoginForm } from "~/components/common/forms/login";
import { RegisterForm } from "~/components/common/forms/register";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export const CarbonApiForm = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
          {isLogin ? "Login to Your Account" : "Create an Account"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex justify-center space-x-4">
          <Button
            variant={isLogin ? "default" : "outline"}
            onClick={() => setIsLogin(true)}
            className="w-1/2"
          >
            Login
          </Button>
          <Button
            variant={!isLogin ? "default" : "outline"}
            onClick={() => setIsLogin(false)}
            className="w-1/2"
          >
            Register
          </Button>
        </div>
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </CardContent>
    </Card>
  );
};

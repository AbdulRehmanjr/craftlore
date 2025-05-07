"use client";

import { useAuthStore } from "~/hooks/use-register-dialog";
import { LoginForm } from "~/components/common/forms/login";
import { RegisterForm } from "~/components/common/forms/register";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs";
import { Button } from "~/components/ui/button";

export const AuthDialog = ()=> {
  const { isOpen, setOpen, activeTab, setActiveTab } = useAuthStore();

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold  text-primary font-montserrat">
            {activeTab === "login" ? "Welcome Back" : "Create an Account"}
          </DialogTitle>
        </DialogHeader>
        
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'login' | 'register')} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <LoginForm />
          </TabsContent>
          
          <TabsContent value="register" className="space-y-4">
            <RegisterForm />
          </TabsContent>
        </Tabs>
        
        <div className="mt-4 text-center text-sm">
          {activeTab === "login" ? (
            <p>
              Don&apos;t have an account?{" "}
              <Button 
                variant="link" 
                className="p-0" 
                onClick={() => setActiveTab("register")}
              >
                Sign up
              </Button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Button 
                variant="link" 
                className="p-0" 
                onClick={() => setActiveTab("login")}
              >
                Sign in
              </Button>
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
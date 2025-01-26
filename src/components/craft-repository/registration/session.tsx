"use client";
import { GenerateApi } from "~/components/craft-repository/registration/generate-key";
import { Documentation } from "~/components/craft-repository/documentation";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { RegisterApiForm } from "~/components/craft-repository/registration/register-form";
import { useSession } from "next-auth/react";

export const SessionRegister = () => {
  const session = useSession();
  return (
    <>
      {!session.data?.user ? (
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-md">
            <RegisterApiForm />
          </div>
        </div>
      ) : (
        <Card className="mx-auto w-full max-w-6xl">
          <CardHeader>
            <CardTitle className="text-xl">Integration Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <GenerateApi />
            <Documentation />
          </CardContent>
        </Card>
      )}
    </>
  );
};

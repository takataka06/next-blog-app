'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useActionState } from 'react';
import { createUser } from "@/lib/actions/createUser";

export default function RegisterForm() {
  const [state,formAction] = useActionState(
    createUser,
    { success: false, errors: {} },
  );
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>会員登録</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">名前</Label>
            <Input id="name" name="name" type="text" required />
            {state.errors.name && (
              <p className="text-sm text-red-500">{state.errors.name.join(",")}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">メール</Label>
            <Input id="email" name="email" type="mail" required />
            {state.errors.email && (
              <p className="text-sm text-red-500">{state.errors.email.join(",")}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="">password</Label>
            <Input id="password" name="password" type="password" required />
            {state.errors.password && (
              <p className="text-sm text-red-500">{state.errors.password.join(",")}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">パスワード</Label>
            <Input id="confirmPassword" name="confirmPassword" type="password" required />
            {state.errors.confirmPassword && (
              <p className="text-sm text-red-500">{state.errors.confirmPassword.join(",")}</p>
            )}
          </div>
          <Button type="submit" className="w-full">会員登録</Button>
        </form>
      </CardContent>
    </Card>
  )}
<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ref } from "vue";

const message = ref("Enter information below");
/** 
const formData = {
  username: "",
  password: "",
  confirmPassword: "",
};
*/
</script>

<template>
  <div class="p-2 m-1 h-1/2 w-1/2 mx-auto mt-20">
    <h1 class="text-3xl font-bold text-center">{{ message }}</h1>
    <div class="p-5 mx-auto w-full">
      <Tabs default-value="login" class="w-[400px] mx-auto">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="login"> Log in </TabsTrigger>
          <TabsTrigger value="signup"> Sign up </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Log in</CardTitle>
              <CardDescription>
                Please enter your credentials to log in with Autheny.
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              <div class="space-y-1">
                <Label for="name">Username</Label>
                <Input id="name" type="text" />
              </div>
              <div class="space-y-1">
                <Label for="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button class="mx-auto">Log in</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>
                Please enter your credentials to sign up with Autheny.
              </CardDescription>
            </CardHeader>
            <CardContent class="space-y-2">
              <div class="space-y-1">
                <Label for="username">Username</Label>
                <Input id="username" type="text" />
              </div>
              <div class="space-y-1">
                <Label for="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div class="space-y-1">
                <Label for="confirm-password">Confirm password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button class="mx-auto">Create account</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

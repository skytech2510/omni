"use client";
import React, { useRef } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm, Controller } from "react-hook-form";
const Page: React.FC = () => {
  const { control, handleSubmit } = useForm();
  const navigator = useRouter();
  const formref = useRef(null);
  const onSubmit = async (data: any) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.error) {
      console.log("sdfsdf");
    }
    if (res?.ok) {
      return navigator.push("/");
    }
    // navigator.push("/register/step_2");
  };
  return (
    <div className="page bg-[url('/assets/login/back.png')] w-[100vw] h-[100vh] bg-no-repeat">
      <div className=" w-full flex-wrap flex flex-row justify-end h-full">
        <div className="flex-[3]"></div>
        <form
          className="flex flex-[2] flex-col justify-between self-center p-[10vw] min-w-[400px]"
          onSubmit={handleSubmit(onSubmit)}
          ref={formref}
        >
          <div className="flex flex-row justify-center">
            <div className="text-left">
              <h2 className="text-[32px]">Welcome Back to</h2>
              <h1 className="text-[40px] text-[#5B56EF]">OMIN</h1>
            </div>
          </div>
          <div className="flex  w-full flex-col gap-5 pt-5">
            <Controller
              defaultValue={""}
              name="email"
              control={control}
              render={({
                field: { onChange, value },
                formState: { errors },
                fieldState,
              }) => (
                <>
                  <Input
                    type="email"
                    onChange={onChange}
                    value={value}
                    placeholder="Enter your email"
                    image="email.svg"
                  />
                  <p className=" text-[red]">
                    {errors?.email?.message as string}
                  </p>
                </>
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue={""}
              render={({
                field: { onChange, value },
                formState: { errors },
                fieldState,
              }) => (
                <>
                  <Input
                    type="password"
                    onChange={onChange}
                    value={value}
                    placeholder="Enter your password"
                    image="password.svg"
                  />
                  <p className=" text-[red]">
                    {errors?.password?.message as string}
                  </p>
                </>
              )}
            />
          </div>
          <div className="pt-5">
            {/* <Link href={"#"} className=" text-[#5B56EF] underline">
              Forget password
            </Link> */}
            If you don’t have an account,
            <Link href={"/register"} prefetch className=" text-[#5B56EF] underline">
              Sign up
            </Link>
          </div>
          <div className="pt-5">
            <Button
              onClick={() =>
                (formref?.current as unknown as HTMLElement).dispatchEvent?.(new Event("submit"))
              }
              variant="fill"
              color="#5B56EF"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
// export const getServerSideProps = async () =>{
//     return {
//         props: {},
//     }
// }
export default Page;

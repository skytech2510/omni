/*
    This is Register Page
*/
"use client";
import Image from "next/image";
import Button from "../components/Button";
import Step2 from "./step_2";
import Step1 from "./step_1";
import Step3 from "./step_3";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserDocument } from "@/models/User";
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    fullname: yup.string().required(),
    phone: yup.string().required(),
    birthday: yup.string().required(),
    country: yup.string().required(),
    creditCard: yup.string().required(),
    expireDate: yup.string().required(),
    securityCode: yup.string().required(),
    location: yup.string().required(),
  })
  .required();
const Page: React.FC = () => {
  const navigator = useRouter();
  const [step, setStep] = useState<number>(0);
  const formRef = useRef(null);
  const handleNextStep = () => {
    if (step < 2) {
      setStep((step) => step + 1);
    } else {
      (formRef.current as unknown as HTMLElement).click();
    }
  };
  const handleBackStep = () => {
    setStep((step) => step - 1);
  };
  const onSubmitHandler = async (event:any) => {
    event.preventDefault();
    const isValid = await trigger();
    if(isValid){
      handleSubmit(onSubmit)();
    }
    else {
      toast("Incorrect value! \n Please check input values", {type:"error"});
    }
  }
  const onSubmit = (data: any) => {
    console.log(data);
    axios
      .post("http://localhost:3000/api/register", data)
      .then((res) => {
        console.log(res.data);
        navigator.push("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const {
    trigger,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <div className="page bg-[url('/assets/register/back.png')] w-[100%] h-[100vh] bg-no-repeat">
      <ToastContainer />
      <div className=" w-full flex-wrap flex flex-row justify-end h-full">
        <div className="flex-[3]"></div>
        <div className="flex flex-[2] flex-col justify-between self-center px-[10vw] min-w-[400px]">
          <div className="flex flex-row justify-center">
            <div className="text-left">
              <h2 className="text-[32px]">Welcome to join</h2>
              <h1 className="text-[40px] text-[#5B56EF]">OMIN</h1>
            </div>
          </div>
          <div className="flex w-full flex-col gap-10 pt-5">
            <form onSubmit={onSubmitHandler}>
              {step === 0 ? (
                <Step1 control={control} />
              ) : step === 1 ? (
                <Step2 control={control} />
              ) : (
                <Step3 />
              )}
              <input type="submit" hidden ref={formRef} />
            </form>
          </div>
          <div className="flex flex-row gap-5 justify-center p-5">
            {[0, 1, 2].map((v) => {
              const element =
                v === step ? (
                  <div className="h-[10px] w-[40px] bg-[#5B56EF] rounded-full"></div>
                ) : (
                  <div className="h-[10px] w-[10px] bg-[#D9D9D9] rounded-full"></div>
                );
              return <>{element}</>;
            })}
          </div>
          <div className="pt-5 flex flex-row justify-between gap-5">
            {step !== 0 && (
              <Button
                variant="outline"
                color="#5B56EF"
                onClick={handleBackStep}
              >
                <div className="flex flex-row gap-5 justify-center">
                  <Image
                    src={"/assets/icons/arrow-small-left.svg"}
                    width={"16"}
                    height={"16"}
                    alt=""
                  />
                  <div>Back</div>
                </div>
              </Button>
            )}
            <Button variant="fill" color="#5B56EF" onClick={handleNextStep}>
              <div className="flex flex-row gap-5 justify-center">
                <div>{step !== 2 ? "Next" : "Join"}</div>
                <Image
                  src={"/assets/icons/arrow-small-right.svg"}
                  width={"16"}
                  height={"16"}
                  alt=""
                />
              </div>
            </Button>
          </div>
          <div className="pt-5">
            If you already have an account,
            <Link href={"/login"} className=" text-[#5B56EF] underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;

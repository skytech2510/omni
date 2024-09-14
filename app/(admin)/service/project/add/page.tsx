"use client";
import Button from "@/app/components/Button";
import FileItem from "@/app/components/opportunities/FileItem";
import ProjectDiv from "@/app/components/projects/ProjectDiv";
import UploadDiv from "@/app/components/projects/UploadDiv";
import UnderlineInput from "@/app/components/UnderlineInput";
import dynamic from "next/dynamic";
const ReactSelect = dynamic(() => import("react-select"), { ssr: false });
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { GetAll } from "@/actions/opportunity";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Add } from "@/actions/project";
const schema = yup
  .object({
    title: yup.string().required(),
    information: yup.string().required(),
    description: yup.string().required(),
    opportunity: yup.string().required(),
  })
  .required();
const Page: React.FC = () => {
  /////////Hooks
  const { handleSubmit, control, setValue } = useForm({
    resolver: yupResolver(schema),
  });
  const [options, setOptions] = useState<
    Array<{ label: string; value: string }>
  >([]);
  const [files, setFiles] = useState<Array<File>>([]);
  const inputFileRef = useRef(null);
  useEffect(() => {
    GetAll().then((data) => {
      let aa =
        data &&
        data.map((item: any) => {
          return { value: item._id, label: item.title };
        });
      setOptions(aa);
    });
  }, []);
  const fileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    let file = e.currentTarget.files?.item(0);
    if (file) {
      if (file?.size > 200 * 1024)
        return toast("File size is limited to 200K bytes", { type: "error" });
      ///////Limit to 200Kbytes
      file && setFiles((files) => files.concat(file));
    }
  };
  const fileRemove = (index: number) => {
    let aa = files;
    aa.splice(index, 1);
    setFiles((files) => [...aa]);
  };

  //////////////General Funtions
  const onSubmit = async (data: any) => {
    let res = await Add({ data: data, files: files });
  };
  const fileSelectOpenDialg = () => {
    (inputFileRef.current as unknown as HTMLInputElement).click();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <input
        type="file"
        accept=".pdf, .doc, .docx, .txt, .png, .jpeg, .jpg"
        hidden
        ref={inputFileRef}
        onChange={fileSelect}
      ></input>
      <div className="flex flex-col gap-5">
        <ProjectDiv>
          <div className="flex flex-row justify-between">
            <div className="flex-1 text-[16px] text-[#5B56EF]">
              Opportunity:
            </div>
            <div className="flex-[5] ">
              <Controller
                name="opportunity"
                rules={{ required: true }}
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState,
                  formState: { errors },
                }) => {
                  return (
                    <>
                      <ReactSelect
                        options={options}
                        onChange={(e: any) => {
                          setValue("opportunity", e?.value);
                        }}
                      />
                      <p className=" text-[red]">
                        {errors?.opportunity?.message as string}
                      </p>
                    </>
                  );
                }}
              />
            </div>
          </div>
        </ProjectDiv>
        <ProjectDiv>
          <div className="flex flex-row justify-between">
            <div className="flex-1 text-[16px] text-[#5B56EF]">Title:</div>
            <div className="flex-[5] ">
              <Controller
                name="title"
                control={control}
                defaultValue={""}
                render={({
                  field: { onChange, value },
                  fieldState,
                  formState: { errors },
                }) => (
                  <>
                    <UnderlineInput value={value} onChange={onChange} />
                    <p className=" text-[red]">
                      {errors?.title?.message as string}
                    </p>
                  </>
                )}
              />
            </div>
          </div>
        </ProjectDiv>
        <ProjectDiv>
          <div className="flex flex-row justify-between">
            <div className="flex-1 text-[16px] text-[#5B56EF]">Description</div>
            <div className="flex-[5]">
              <Controller
                name="description"
                control={control}
                defaultValue={""}
                render={({
                  field: { onChange, value },
                  fieldState,
                  formState: { errors },
                }) => (
                  <>
                    <UnderlineInput value={value} onChange={onChange} />
                    <p className=" text-[red]">
                      {errors?.description?.message as string}
                    </p>
                  </>
                )}
              />
            </div>
          </div>
        </ProjectDiv>
        <ProjectDiv>
          <div className="flex flex-row justify-between">
            <div className="flex-1 text-[16px] text-[#5B56EF]">
              Information:
            </div>
            <div className="flex-[5]">
              <Controller
                name="information"
                control={control}
                defaultValue={""}
                render={({
                  field: { onChange, value },
                  fieldState,
                  formState: { errors },
                }) => (
                  <>
                    <UnderlineInput value={value} onChange={onChange} />
                    <p className=" text-[red]">
                      {errors?.information?.message as string}
                    </p>
                  </>
                )}
              />
            </div>
          </div>
        </ProjectDiv>
        <ProjectDiv>
          <div className="flex flex-row justify-between">
            <div className="flex-1 text-[16px] text-[#5B56EF]">Files:</div>
            <div className="flex-[5] flex flex-col gap-5">
              <UploadDiv onClick={fileSelectOpenDialg} />
              <div className="flex flex-col gap-3">
                {files.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-row justify-between">
                      <FileItem filename={item.name} />
                      <Image
                        src={"/assets/icons/delete_1.svg"}
                        className=" cursor-pointer rounded-full"
                        width={30}
                        height={30}
                        alt=""
                        onClick={() => {
                          fileRemove(index);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ProjectDiv>
        <div className="flex flex-row justify-end items-center gap-5">
          <Button
            width="w-[200px]"
            variant="outline"
            onClick={() => {}}
            color="#5B56EF"
          >
            Draft
          </Button>
          <Button
            width="w-[200px]"
            variant="fill"
            onClick={() => {
              (
                inputFileRef.current as unknown as HTMLFormElement
              ).dispatchEvent(new Event("submit"));
            }}
            color="#5B56EF"
          >
            Apply
          </Button>
        </div>
      </div>
    </form>
  );
};
export default Page;

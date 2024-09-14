"use client";
import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Select from "@/app/components/Select";
import { useRef } from "react";
import { Add } from "@/actions/opportunity";
Modal.setAppElement("#app");
interface AddModalPropsType {
  isShow: boolean;
  closeModal: () => void;
}
///
interface OpportunityAddFormType {
  name: string;
  type: string;
  amount: string;
  from: string;
  to: string;
}
const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const AddModal: React.FC<AddModalPropsType> = ({ isShow, closeModal }) => {
  const { handleSubmit, control } = useForm<OpportunityAddFormType>();
  const formref = useRef(null);
  const onSubmit = async (data: any) => {
    const result = await Add(data);
    console.log(result);
  };
  return (
    <>
      <Modal isOpen={isShow} style={customStyles} contentLabel="Add">
        <div className="flex flex-row justify-between py-5">
          <h1 className="text-[32px]">Add Opportunity</h1>
          <button onClick={closeModal} className="text-[20px] ">
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            ref={formref}
          >
            <div className="flex flex-col gap-2">
              <div>Opportunity:</div>
              <Controller
                name="name"
                control={control}
                rules={{ required: true }}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  formState,
                  fieldState,
                }) => (
                  <Select
                    options={[
                      { label: "AAAA", value: "123" },
                      { label: "BBBB", value: "www" },
                      { label: "CCC", value: "555" },
                    ]}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>Type:</div>
              <Controller
                name="type"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  formState,
                  fieldState,
                }) => (
                  <Select
                    options={[
                      { label: "AAAA", value: "123" },
                      { label: "BBBB", value: "www" },
                      { label: "CCC", value: "555" },
                    ]}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>Amount:</div>
              <Controller
                name="amount"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  formState,
                  fieldState,
                }) => <Input type="number" onChange={onChange} value={value} />}
              />
            </div>
            <div className=" flex flex-row justify-between gap-5">
              <div className="flex flex-col gap-2">
                <div>From:</div>
                <Controller
                  name="from"
                  control={control}
                  rules={{ required: true }}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    formState,
                    fieldState,
                  }) => (
                    <Input
                      image="date.svg"
                      type="date"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div>To:</div>
                <Controller
                  name="to"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    formState,
                    fieldState,
                  }) => (
                    <Input
                      image="date.svg"
                      type="date"
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
              </div>
            </div>
            {/* <Input {...register("type", { required: true })} /> */}
          </form>
          <div className="flex flex-row justify-between gap-5">
            <Button variant="outline" onClick={closeModal} color="#5B56EF">
              Cancel
            </Button>
            <Button
              variant="fill"
              onClick={() => {
                (formref.current as unknown as HTMLFormElement).dispatchEvent(
                  new Event("submit", { cancelable: true, bubbles: true })
                );
              }}
              color="#5B56EF"
            >
              Save
            </Button>
          </div>
        </div>
        <div></div>
      </Modal>
    </>
  );
};
export default AddModal;

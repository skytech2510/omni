"use client";
import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Select from "@/app/components/Select";
import moment from "moment";
import { useRef } from "react";
import { Update } from "@/actions/opportunity";
import { OpportunityDocument } from "@/models/Opportunity";
Modal.setAppElement("#app");
interface EditModalPropsType {
  isShow: boolean;
  data: OpportunityDocument;
  closeModal: () => void;
}
///
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
const EditModal: React.FC<EditModalPropsType> = ({
  isShow,
  data,
  closeModal,
}) => {
  const { handleSubmit, control } = useForm<OpportunityDocument>();
  const formRef = useRef(null);
  const onSubmit = async (formData: any) => {
    const result = await Update(data._id, formData);
    console.log(result);
    closeModal();
  };
  return (
    <>
      <Modal isOpen={isShow} style={customStyles} contentLabel="Edit">
        <div className="flex flex-row justify-between py-5">
          <h1 className="text-[32px]">Edit Opportunity</h1>
          <button onClick={closeModal} className="text-[20px] ">
            &times;
          </button>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            ref={formRef}
          >
            <div className="flex flex-col gap-2">
              <div>Opportunity:</div>
              <Controller
                name="name"
                control={control}
                defaultValue={data.name}
                render={({
                  field: { onChange, value },
                  formState,
                  fieldState,
                }) => (
                  <Select
                    options={[
                      { label: "AAAA", value: "AAAA" },
                      { label: "BBBB", value: "BBBB" },
                      { label: "CCC", value: "CCC" },
                      { label: "SELECT", value: "" },
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
                defaultValue={data.type}
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
                defaultValue={data.amount}
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
                  defaultValue={moment(data.from).format("YYYY-MM-DD")}
                  control={control}
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
                  defaultValue={moment(data.to).format("YYYY-MM-DD")}
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
            <div className="flex flex-row justify-between gap-5">
              <Button variant="outline" onClick={closeModal} color="#5B56EF">
                Cancel
              </Button>
              <Button
                variant="fill"
                onClick={() => {
                  (formRef.current as unknown as HTMLFormElement).dispatchEvent(
                    new Event("submit")
                  );
                }}
                color="#5B56EF"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
        <div></div>
      </Modal>
    </>
  );
};
export default EditModal;

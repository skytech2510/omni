import Input from "../components/Input";
import CheckBox from "../components/CheckBox";
const Step3: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-5">
          <CheckBox label="Service1" bgColor="red" />
          <CheckBox label="Service1" bgColor="red" />
          <CheckBox label="Service1" bgColor="red" />
          <CheckBox label="Service1" bgColor="red" />
        </div>
        <div className="flex flex-col gap-5">
          <CheckBox label="Service1" bgColor="red" />
          <CheckBox label="Service1" bgColor="red" />
          <CheckBox label="Service1" bgColor="red" />
          <CheckBox label="Service1" bgColor="red" />
        </div>
      </div>
    </>
  );
};
export default Step3;

import Input from "../components/Input";
import { Controller } from "react-hook-form";
interface Step2PropsType {
  control: any;
}
const Step2: React.FC<Step2PropsType> = ({ control }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <Controller
          name="creditCard"
          control={control}
          defaultValue={""}
          render={({
            field: { onChange, value },
            formState: { errors },
            fieldState,
          }) => (
            <>
              <Input
                type="text"
                onChange={onChange}
                value={value}
                placeholder="Enter your credit card"
                image="credit-card.svg"
              />
              <p className=" text-[red]">
                {errors?.creditCard?.message as string}
              </p>
            </>
          )}
        />
        <Controller
          name="expireDate"
          control={control}
          defaultValue={""}
          render={({
            field: { onChange, value },
            formState: { errors },
            fieldState,
          }) => (
            <>
              <Input
                type="date"
                onChange={onChange}
                value={value}
                placeholder="Enter your expire date"
                image="calendar-day.svg"
              />
              <p className=" text-[red]">
                {errors?.expireDate?.message as string}
              </p>
            </>
          )}
        />
        <Controller
          name="securityCode"
          control={control}
          defaultValue={""}
          render={({
            field: { onChange, value },
            formState: { errors },
            fieldState,
          }) => (
            <>
              <Input
                type="text"
                onChange={onChange}
                value={value}
                placeholder="Enter your security code"
                image="Frame.svg"
              />
              <p className=" text-[red]">
                {errors?.securityCode?.message as string}
              </p>
            </>
          )}
        />
      </div>
      <div className="flex flex-col gap-5">
        <Controller
          name="country"
          control={control}
          defaultValue={""}
          render={({
            field: { onChange, value },
            formState: { errors },
            fieldState,
          }) => (
            <>
              <Input
                type="text"
                onChange={onChange}
                value={value}
                placeholder="Enter your country"
                image="world.svg"
              />
              <p className=" text-[red]">
                {errors?.country?.message as string}
              </p>
            </>
          )}
        />
        <Controller
          name="zipCode"
          control={control}
          defaultValue={""}
          render={({ field: { onChange, value }, formState, fieldState }) => (
            <Input
              type="text"
              onChange={onChange}
              value={value}
              placeholder="Enter your zip code"
              image="newsletter-subscribe.svg"
            />
          )}
        />
      </div>
    </div>
  );
};
export default Step2;

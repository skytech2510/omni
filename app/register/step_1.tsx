import Input from "../components/Input";
import { Controller } from "react-hook-form";
import Select from "../components/Select";
interface Step1PropsType {
  control: any;
}
const Step1: React.FC<Step1PropsType> = ({ control }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <Controller
          name="gender"
          control={control}
          defaultValue="male"
          render={({
            field: { onChange, value },
            formState: { errors },
            fieldState,
          }) => (
            <>
              <Select
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
                onChange={onChange}
                value={value}
                image="gender.svg"
              />
              <p className=" text-[red]">{errors?.gender?.message as string}</p>
            </>
          )}
        />
        <Controller
          name="humanrace"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, formState, fieldState }) => (
            <Input
              type="text"
              onChange={onChange}
              value={value}
              placeholder="Enter your human race"
              image="human_race.svg"
            />
          )}
        />
        <Controller
          name="fullname"
          control={control}
          defaultValue=""
          rules={{
            required: "Fullname is required",
            minLength: {
              value: 3,
              message: "Fullname must be at least 3 characters",
            },
          }}
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
                placeholder="Enter your fullname"
                image="user.svg"
              />
              <p className=" text-[red]">
                {errors?.fullname?.message as string}
              </p>
            </>
          )}
        />
        <Controller
          name="birthday"
          control={control}
          defaultValue=""
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
                placeholder="Enter your birthday"
                image="date.svg"
              />
              <p className=" text-[red]">
                {errors?.birthday?.message as string}
              </p>
            </>
          )}
        />
        <Controller
          name="company"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, formState, fieldState }) => (
            <Input
              type="text"
              onChange={onChange}
              value={value}
              placeholder="Enter your company"
              image="house-building.svg"
            />
          )}
        />
      </div>
      <div className="flex flex-col gap-5">
        <Controller
          name="email"
          control={control}
          defaultValue=""
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
                image="at1.svg"
              />
              <p className=" text-[red]">{errors?.email?.message as string}</p>
            </>
          )}
        />
        <Controller
          name="location"
          control={control}
          defaultValue=""
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
                placeholder="Enter your location"
                image="marker.svg"
              />
              <p className=" text-[red]">
                {errors?.location?.message as string}
              </p>
            </>
          )}
        />
        <Controller
          name="instagram"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value }, formState, fieldState }) => (
            <Input
              type="text"
              onChange={onChange}
              value={value}
              placeholder="Enter your instagram"
              image="instagram.svg"
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
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
                placeholder="Enter your phone number"
                image="phone-flip.svg"
              />
              <p className=" text-[red]">{errors?.phone?.message as string}</p>
            </>
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
          defaultValue=""
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
                placeholder="Set your password"
                image="user-key.svg"
              />
              <p className=" text-[red]">
                {errors?.password?.message as string}
              </p>
            </>
          )}
        />
      </div>
    </div>
  );
};
export default Step1;

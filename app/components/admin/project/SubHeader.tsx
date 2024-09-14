import UnderlineInput from "../../UnderlineInput";
import { MultiSelect } from "react-multi-select-component";
import Image from "next/image";
import Button from "../../Button";
import React from "react";
interface SubHeadderPropsType {
  isEdit?: boolean;
  onClickEdit: () => void;
  onClickAdd: () => void;
}
const SubHeadder: React.FC<SubHeadderPropsType> = ({
  isEdit,
  onClickEdit,
  onClickAdd,
}) => {
  const options = [
    { label: "Grapes", value: "grapes" },
    { label: "Mango", value: "mango" },
    { label: "Strawberry", value: "strawberry", disabled: true },
  ];
  const [selected, setSelected] = React.useState<
    Array<{ label: string; value: string; disable: boolean }>
  >([]);
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-5">
          <div className=" flex flex-row gap-5">
            <UnderlineInput
              placeholder="Project"
              classNames=" flex flex-col justify-end"
            />
            <UnderlineInput
              placeholder="Provider"
              classNames=" flex flex-col justify-end"
            />
            <Button color="#5B56EF" variant="outline" onClick={() => {}}>
              <div className="flex gap-3 flex-row justify-center items-center">
                <Image
                  src={"/assets/icons/search.svg"}
                  width={15}
                  height={15}
                  alt=""
                />
                Search
              </div>
            </Button>
          </div>
          <MultiSelect
            className="w-[300px]"
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select Oppotunity"
          />
        </div>
      </div>
      <div className="flex flex-row justify-end gap-5">
        {isEdit && (
          <>
            <Button
              variant="outline"
              color="#5B56EF"
              onClick={onClickEdit}
              width="w-[150px]"
            >
              Edit
            </Button>
            <Button
              variant="fill"
              color="#EF567B"
              onClick={() => {}}
              width="w-[150px]"
            >
              Delete
            </Button>
          </>
        )}
        <Button
          variant="fill"
          color="#5B56EF"
          onClick={onClickAdd}
          width="w-[150px]"
        >
          +Add
        </Button>
      </div>
    </div>
  );
};
export default SubHeadder;

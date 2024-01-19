import { ChangeEvent, FC, memo } from "react";
import Button from "./Button";

type SearchProps = {
  handleQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  value: string;
};

const Search: FC<SearchProps> = ({ handleQueryChange, handleSearch, value }) => (
  <div className=" my-4 mx-2 sm:ml-none flex ">
    <input value={value} onChange={handleQueryChange} placeholder="Search..." type="text" className="border border-gray-400 p-2 rounded-lg w-full mr-1" />
    <Button disabled={value === ""} onClick={handleSearch}>Search</Button>
  </div>
);

export default memo(Search);

import { Select, Option } from "@material-tailwind/react";

export function SelectDefault() {
  return (
    <div className="border-r px-3 border-black">
      <select name="cars" id="cars" className="w-30 border-0 h-10">
        <option value="volvo">All categories</option>
        <option value="saab">camera</option>
        <option value="mercedes">games</option>
        <option value="audi">watch</option>
      </select>
    </div>
  );
}

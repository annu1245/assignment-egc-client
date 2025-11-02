import { useForm } from "react-hook-form";
import SelectCategory from "./SelectCategory.jsx";
import { getTodayDate } from "../utils/form.js";

const Filter = () => {
    const { register } = useForm();
    return (
        <div className="flex justify-between">
            <fieldset className="fieldset flex justify-between">
                <div>
                    <legend className="fieldset-legend">Type</legend>
                    <select
                        defaultValue="-- select type --"
                        className="select w-full"
                        {...register("type")}
                    >
                        <option disabled>-- select type --</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>

                <div>
                    <SelectCategory register={register} />
                </div>

                <div>
                    <legend className="fieldset-legend">Select a date</legend>
                    <input
                        type="date"
                        max={getTodayDate()}
                        className="py-2.5 text-sm px-2 rounded-sm bg-[#1d232a] border-1 border-[#464e58]"
                        {...register("date")}
                    />
                </div>
            </fieldset>
            <div className="flex gap-x-5 items-end pb-1">
                <button className="btn bg-[#1b9cff] text-white">Income</button>
                <button className="btn bg-[#ffaf3b] text-white">Expense</button>
            </div>
        </div>
    );
};

export default Filter;

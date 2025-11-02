import { useForm } from "react-hook-form";
import SelectCategory from "./SelectCategory.jsx";
import { getTodayDate } from "../utils/form.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../app/filterSlice.js";

const Filter = () => {
    const { register, watch, reset } = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        const subscription = watch((value) => {
            if (value.type == "-- select type --") {
                value.type = "";
            }
            if (value.category == "-- select category --") {
                value.category = "";
            }
            dispatch(setFilters(value));
        });
        return () => subscription.unsubscribe();
    }, [watch, dispatch]);

    const handleReset = () => {
        reset({
            type: "-- select type --",
            category: "-- select category --",
            date: "",
        });
    };

    return (
        <fieldset className="fieldset flex justify-between">
            <div>
                <legend className="fieldset-legend">Type</legend>
                <select defaultValue="-- select type --" className="select w-full" {...register("type")}>
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
            <div className="flex gap-x-5 items-end">
                <button className="btn bg-[#961bff] text-white" onClick={handleReset}>
                    <span className="text-xl">⟳</span>Reset
                </button>
            </div>
        </fieldset>
    );
};

export default Filter;

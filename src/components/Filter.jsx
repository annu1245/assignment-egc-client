import { useForm } from "react-hook-form";
import SelectCategory from "./SelectCategory.jsx";
import { getTodayDate } from "../utils/form.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../app/filterSlice.js";
import { toast } from "react-toastify";

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
            if (value.startDate && value.endDate && value.startDate > value.endDate) {
                toast.error("End date cannot be before start date!");
                return;
            }
            dispatch(setFilters(value));
        });
        return () => subscription.unsubscribe();
    }, [watch, dispatch]);

    const handleReset = () => {
        reset({
            type: "-- select type --",
            category: "-- select category --",
            startDate: "",
            endDate: "",
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

            <div className="flex gap-4 items-end">
                <div>
                    <legend className="fieldset-legend">Start Date</legend>
                    <input
                        type="date"
                        max={getTodayDate()}
                        className="py-2.5 text-sm px-2 rounded-sm bg-[#1d232a] border-1 border-[#464e58]"
                        {...register("startDate")}
                    />
                </div>
                <div>
                    <legend className="fieldset-legend">End Date</legend>
                    <input
                        type="date"
                        max={getTodayDate()}
                        className="py-2.5 text-sm px-2 rounded-sm bg-[#1d232a] border-1 border-[#464e58]"
                        {...register("endDate")}
                    />
                </div>
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

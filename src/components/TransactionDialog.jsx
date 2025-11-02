import { useForm } from "react-hook-form";
import validator from "validator";
import SelectCategory from "./SelectCategory.jsx";
import { getTodayDate } from "../utils/form.js";
import { useCreateTransactionMutation } from "../services/api.js";
import { useEffect } from "react";
import { toast } from "react-toastify";

const TransactionDialog = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const [createTransaction, { data, error, isSuccess, isLoading }] = useCreateTransactionMutation();

    useEffect(() => {
        if (error) {
            if (error.status == 400) {
                for (const field in error.data?.errors) {
                    const message = error.data?.errors[field];
                    setError(field, { message });
                }
            } else {
                const message = error.data?.message;
                setError("serverError", { message });
                toast.error(message);
            }
        }
    }, [error]);

    useEffect(() => {
        if (isSuccess) {
            toast.success("Transaction created");
        }
    }, [isSuccess]);

    const onSubmit = async (data) => {
        const payload = {
            ...data,
            type: "expense",
        };
        createTransaction(payload);
    };

    return (
        <dialog className="card card-border bg-base-300 w-96 m-auto mt-10">
            <div className="card-body">
                <h2 className="card-title m-auto text-xl">Form</h2>

                {errors.serverError && <p className="text-red-500">{errors.serverError.message}</p>}

                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Amount</legend>
                        <input
                            type="number"
                            className={`input w-full [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [appearance:textfield] ${errors?.amount ? "border-red-500" : ""} `}
                            placeholder="Amount"
                            {...register("amount", {
                                required: "amount is required",
                                validate: (value) => validator.isNumeric(String(value)) || "Amount must be a valid number",
                            })}
                        />
                        {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}

                        <legend className="fieldset-legend">Description</legend>
                        <textarea
                            className={`textarea w-full h-24 ${errors?.description ? "border-red-500" : ""}`}
                            placeholder="Description"
                            {...register("description", {
                                required: "description is required",
                            })}
                        ></textarea>
                        {errors.description && <p className="text-red-500">{errors.description.message}</p>}

                        <SelectCategory register={register} errors={errors} />

                        <legend className="fieldset-legend">Select a date</legend>
                        <input
                            type="date"
                            max={getTodayDate()}
                            className="py-2.5 text-sm px-2 rounded-sm bg-[#1d232a] border-1 border-[#464e58]"
                            {...register("date", {
                                required: "Date is required",
                                validate: (value) => validator.isDate(String(value)) || "Invalid date",
                            })}
                        />
                        {errors.date && <p className="text-red-500">{errors.date.message}</p>}

                        <div className="card-actions justify-center mt-4">
                            <button className="btn w-full bg-amber-700 text-black text-lg">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </dialog>
    );
};

export default TransactionDialog;

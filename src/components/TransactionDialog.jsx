import { useForm } from "react-hook-form";
import validator from "validator";
import SelectCategory from "./SelectCategory.jsx";
import { getTodayDate } from "../utils/form.js";
import { useCreateTransactionMutation } from "../services/api.js";
import { useEffect } from "react";
import { toast } from "react-toastify";

const TransactionDialog = ({ type }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
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
            handleClose();
        }
    }, [isSuccess]);

    const onSubmit = async (data) => {
        const payload = {
            ...data,
            type,
        };
        createTransaction(payload);
    };

    const handleClose = () => {
        reset();
        document.getElementById("transaction_modal").close();
    };

    return (
        <dialog id="transaction_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h2 className="font-bold text-lg">{type}</h2>

                {errors.serverError && <p className="text-red-500">{errors.serverError.message}</p>}

                <div className="modal-action block">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={handleClose}
                        >
                            ✕
                        </button>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Amount</legend>
                            <input
                                type="number"
                                className={`input w-full [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [appearance:textfield] ${
                                    errors?.amount ? "border-red-500" : ""
                                } `}
                                placeholder="Amount"
                                {...register("amount", {
                                    required: "amount is required",
                                    validate: (value) =>
                                        validator.isNumeric(String(value)) || "Amount must be a valid number",
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
                                <button
                                    className={`btn w-full text-white text-lg ${
                                        type == "expense" ? "bg-[#ffaf3b]" : "bg-[#1b9cff]"
                                    }`}
                                >
                                    Submit
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default TransactionDialog;

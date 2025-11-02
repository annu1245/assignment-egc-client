import React from "react";
import { useGetCategoriesQuery } from "../services/api";
import validator from "validator";

const SelectCategory = ({ register, errors }) => {
    const { data: categories, error: categoryError, isLoading } = useGetCategoriesQuery();

    if (isLoading) return <div>Loading...</div>;
    if (categoryError) return <div>Error: {categoryError.message}</div>;

    return (
        <>
            <legend className="fieldset-legend">Category</legend>
            <select
                defaultValue="-- select category --"
                className="select w-full"
                {...register("category", {
                    required: "Category is required",
                    validate: (value) => value != "-- select category --" || "Category is required",
                })}
            >
                <option disabled>-- select category --</option>
                {Object.entries(categories).map(([key, value]) => (
                    <option key={value} value={value}>
                        {key}
                    </option>
                ))}
            </select>
            {errors?.category && <p className="text-red-500">{errors?.category.message}</p>}
        </>
    );
};

export default SelectCategory;

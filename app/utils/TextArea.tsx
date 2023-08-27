'use client';

import { 
    FieldErrors, 
    FieldValues, 
    UseFormRegister 
  } from "react-hook-form";
import React from 'react'

type Props = {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const TextArea = ({
    id,
    label,
    type = "text", 
    disabled, 
    formatPrice,
    register,
    required,
    errors,
  } : Props) => {
  return (
    <div className="w-full relative flex flex-col gap-2">
        <label 
            className={`
                text-md
                font-semibold
                peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75
                peer-focus:-translate-y-4
                ${errors[id] ? 'text-rose-500' : 'text-zinc-100'}
            `} >
            {label}
        </label>
        <textarea
            id={id} disabled={disabled} placeholder='Message ' 
            {...register(id, { required })}  
            className={`
                peer
                w-full
                p-2
                pt-2 
                font-medium 
                bg-transparent 
                border-2
                rounded-md
                outline-gray-600
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                ${formatPrice ? 'pl-9' : 'pl-4'}
                ${errors[id] ? 'border-rose-500' : 'border-gray-500'}
                ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}>
        </textarea>
    </div>
  )
}

export default TextArea
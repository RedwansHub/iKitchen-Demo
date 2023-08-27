'use client';

import React from 'react'
import { 
    FieldErrors, 
    FieldValues, 
    UseFormRegister 
  } from "react-hook-form";

type InputProps = {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const InputField: React.FC<InputProps> = ({
    id,
    label,
    type = "text", 
    disabled, 
    formatPrice,
    register,
    required,
    errors,
  })  => {
  return (
    <div className='w-full relative flex flex-col gap-2'>
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
        <input id={id} disabled={disabled} placeholder={label} 
            type={type} 
            {...register(id, { required,
                ...(id === 'email' && {
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                    },
                }),
             })}  
            className={`
                peer
                w-full
                p-3
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
            `}
        />
    </div>
  )
}

export default InputField
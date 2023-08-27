'use client'

import InputField from '@/app/utils/InputField';
import TextArea from '@/app/utils/TextArea';
import React, { useState } from 'react'
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from "react-hook-form";

type Props = {}

function Form({}: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = 
  (data) => {
      console.log(data);
      
  }
  return (
    <div className='col-span-3 flex justify-center  rounded-md w-full'>
        {/* <h2>Form</h2> */}
        <div className='flex flex-col p-4 gap-4'>
            <div className='flex gap-4 '>
            <InputField
              id="firstName"
              label="First Name"
              disabled={isLoading}
              register={register}  
              errors={errors}
              required
            />
            <InputField
              id="lastName"
              label="Last Name"
              disabled={isLoading}
              register={register}  
              errors={errors}
              required
            />
            </div>
              <InputField id="email"
                label="Email"
                type='email'
                disabled={isLoading}
                register={register}  
                errors={errors}
                required
              />
              <InputField id="phone"
                label="Phone Number"
                disabled={isLoading}
                register={register}  
                errors={errors}
                required
              />
              <TextArea id="message"
                label="Message"
                disabled={isLoading}
                register={register}  
                errors={errors}
                required
              />
            <div>
            </div>

          <div className=' w-full '>
            <div onClick={handleSubmit(onSubmit)} className='grid rounded-md place-items-center py-3 hover:bg-opacity-80 duration-300 ease-in-out cursor-pointer bg-[#00A878]'>
              Send Message
            </div>
          </div>

        </div>
    </div>
  )
}

export default Form
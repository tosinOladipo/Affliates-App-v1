import { SubmitButton } from "@/components/form/Button";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { createCompanyAction } from "@/utils/actions";
import logo from '@/public/logo.png'
import React from "react";
import Image from "next/image";
import ImageInput from "@/components/form/ImageInput";
import SectionTitle from "@/components/global/SectionTitle";


function Company() {
  return (
    <section className="flex flex-col w-full md:w-96 gap-6 mx-auto pt-6">
      <div className="logo mx-auto mt-6">
        <Image src={logo} alt="logo" className="py-6"/>
      </div>
      <SectionTitle title="Register a company" className="text-center"/>
      <FormContainer action={createCompanyAction}>
     
        <div className="w-full pb-4">
          <FormInput type="text" name="companyName" label="Company name:" placeholder="Enter company name"/>
        </div>
        <div className="w-full py-4">
          <FormInput type="email" name="companyEmail" label="Company email:" placeholder="company@mail.com"/>
        </div>
        <div className="w-full py-4">
          <FormInput type="text" name="companyPhone" label="Company Phone number:" placeholder="phone number"/>
        </div>
    
        <div className="w-full py-4">
          <ImageInput label="Company logo"/>
        </div>

        <SubmitButton text='Create profile' className='mt-4' />

      </FormContainer>
    </section>
  )
}

export default Company
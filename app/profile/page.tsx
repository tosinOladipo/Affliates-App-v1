import { SubmitButton } from "@/components/form/Button";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import { createProfileAction } from "@/utils/actions";
import logo from '@/public/logo.png'
import React from "react";
import Image from "next/image";
import ImageInput from "@/components/form/ImageInput";
import SectionTitle from "@/components/global/SectionTitle";

function Profile() {

  return (
    <section className="flex flex-col w-full md:w-96 gap-6 mx-auto pt-6">
      <div className="logo mx-auto mt-6">
        <Image src={logo} alt="logo" className="py-6"/>
      </div>
      <SectionTitle title="Create a profile"/>
      <FormContainer action={createProfileAction}>
      <div className="w-full pb-4">
          <ImageInput label="Profile Image"/>
        </div>
        <div className="w-full py-4">
          <FormInput type="text" name="firstname" label="Firstname:" placeholder="Enter your firstname"/>
        </div>
        <div className="w-full py-4">
          <FormInput type="text" name="lastname" label="Lastname:" placeholder="Enter your lastname"/>
        </div>
        <div className="w-full py-4">
          <FormInput type="email" name="email" label="Email address:" placeholder="username@mail.com"/>
        </div>
        <div className="w-full py-4">
          <FormInput type="text" name="phonenumber" label="Phone number:"/>
        </div>

        <SubmitButton text='Create profile' className='mt-4' />

      </FormContainer>
    </section>
  );
}

export default Profile;

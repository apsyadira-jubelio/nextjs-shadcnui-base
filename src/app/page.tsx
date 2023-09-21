'use client';

import { Button } from '@/components/ui/button';
import { FormItem, FormMessage, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

function IndexPage() {
  const router = useRouter();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = () => {
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className='container mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center '>
      <div className='flex w-full flex-col space-y-4'>
        <div className='mb-3 flex justify-start'>
          <Image src='/assets/logo.png' alt='logo' width={150} height={100} />
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={SignInSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormItem className='space-y-4'>
                <FormControl>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name='email'
                    type='email'
                    size={100}
                    className='py-5'
                    placeholder='Enter your email'
                  />
                </FormControl>
                {errors.email && touched.email && (
                  <FormMessage>{errors.email}</FormMessage>
                )}
                <FormControl>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    name='password'
                    type='password'
                    size={100}
                    className='py-5'
                    placeholder='Enter your password'
                  />
                </FormControl>
                {errors.password && touched.password && (
                  <FormMessage>{errors.password}</FormMessage>
                )}
                <Button
                  className='w-full'
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                  size='lg'
                >
                  Submit
                </Button>
              </FormItem>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default IndexPage;

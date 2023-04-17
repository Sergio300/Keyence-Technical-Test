import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { usePost } from '../context/postContext'
import { useNavigate, Link} from 'react-router-dom'
import * as YUP from 'yup'

export function Create() {

    const { createPosts } = usePost()
    const navigate = useNavigate()

    return (
        <div className='flex item-center justify-center '>
            <div className='bg-zinc-800 p-10 shadow-md shadow-black '>

                <header className='flex justify-between items-center py-4 text-white'>
                    <h2 className='text-xl'>New Data</h2>
                    <Link to="/" className='text-gray-400 text-sm hover:text-gray-300'>
                        Go Back
                    </Link>
                </header>

                <Formik
                    initialValues={{
                        User_ID: "",
                        User_Name: "",
                        Dates: "",
                        Punch_In: "",
                        Punch_Out: ""
                    }}
                    validationSchema={YUP.object({
                        User_ID: YUP.string().required("User ID is required"),
                        User_Name: YUP.string().required("User Name is required"),
                        Dates: YUP.string().required("Dates is required"),
                        Punch_In: YUP.string().required("Punch In is requiresd"),
                        Punch_Out: YUP.string().required("Punch Out is requied")
                    })}
                    onSubmit={async (values) => {
                        await createPosts(values)
                        navigate('/')
                    }}
                >
                    {({ handleSubmit }) => (

                        <Form onSubmit={handleSubmit}>

                            <label htmlFor='title' className='text-sm block  font-bold text-gray-400'>User ID</label>
                            <Field name="User_ID" className="bg-gray-50 border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 mb-4" placeholder="User ID" />
                            <ErrorMessage component="p" name='User_ID' />
                            <label htmlFor='title' className='text-sm block  font-bold text-gray-400'>User Name</label>
                            <Field name="User_Name" className="bg-gray-50 border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 mb-4" placeholder="User Name" />
                            <ErrorMessage component="p" name='User_Name' />
                            <label htmlFor='title' className='text-sm block  font-bold text-gray-400'>Date</label>
                            <Field name="Dates" className="bg-gray-50 border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 mb-4" placeholder="Dates" />
                            <ErrorMessage component="p" name='Dates' />
                            <label htmlFor='title' className='text-sm block  font-bold text-gray-400'>Punch In</label>
                            <Field name="Punch_In" className="bg-gray-50 border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 mb-4" placeholder="Punch In" />
                            <ErrorMessage component="p" name='Punch_In' />
                            <label htmlFor='title' className='text-sm block  font-bold text-gray-400'>Punch Out</label>
                            <Field name="Punch_Out" className="bg-gray-50 border border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-700 dark:placeholder-gray-500 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 mb-4" placeholder="Punch Out" />
                            <ErrorMessage component="p" name='Punch_Out' />
                            <button type='submit' className='bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounden mt-2
                            text-white focus:outline-none disabled:bg-indigo-400'>
                                Save
                            </button>
                        </Form>

                    )}

                </Formik>

            </div>
        </div>
    )
}


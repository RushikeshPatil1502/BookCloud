import React from 'react'
import { useForm } from 'react-hook-form'
import { supabase } from '../supabaseClient';

function UploadBook() {
    const {
       register,
       handleSubmit,
       formState: {errors},
       reset
    } = useForm()

    const onSubmit = async (data) => {
        console.log("Form submitted", data);

        try{
            const file = data.cover[0];

            const {data: storageData , error: storageError} = await supabase.storage
            .from("books")
            .upload(`cover/${Date.now()}-${file.name}` , file)

            if (storageError) throw storageError

            const {data: urlData} = supabase.storage
            .from("books")
            .getPublicUrl(storageData.path
            )

            const {error: insertError} = await supabase
            .from("books")
            .insert([{name: data.name , image_url: urlData.publicUrl}])

            if(insertError) throw insertError

            alert(`book ${data.name} uploaded!`)
            reset();
        }
         catch(error){
            console.log(error);
         }
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 justify-between items-center p-4 shadow-md rounded-xl h-fit'>
        <div className='flex flex-col w-full'>
             <label htmlFor="name" className='font-semibold text-xl'>Book Name</label>
             <input
             id='name' 
             className='px-2 py-3 rounded-xl mt-2 border border-gray-200' 
             type="text" 
             placeholder='Enter Books name'
             {...register("name", {required: "Book name is required"})} />
             {
               errors.name && (
                <span className='text-red-500 text-sm'>{errors.name.message}</span>
               )
             }
        </div>
        <div className='flex flex-col'>
             <label htmlFor="cover" className='font-semibold text-xl'>Book Cover</label>
             <input
             id='cover' 
             className='px-2 py-3 rounded-xl mt-2 border border-gray-200' 
             type="file" 
             accept='image/*'
             placeholder='Enter Books Cover'
             {...register("cover", {required: "Book cover is required"})} />
             {
               errors.name && (
                <span className='text-red-500 text-sm'>{errors.name.message}</span>
               )
             }
        </div>
        <button className='p-2 w-full rounded-lg font-semibold border mt-2 border-gray-200 bg-gray-300'>
            Upload Book
        </button>
    </form>
  )
}

export default UploadBook


 //flow 
// first make ui 
// then reg , handleSubmit , formState: error
// ...register error.name && span
// onSubmit -> data -> cl data
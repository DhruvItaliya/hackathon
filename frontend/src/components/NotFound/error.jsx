import React from 'react'

const Error = (props) => {
  return (
    <div className='w-80 drop-shadow-2xl absolute top-20 right-2'>
      <div role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4">
  <strong class="block font-medium text-red-800"> {props.title} </strong>

  <p class="mt-2 text-sm text-red-700">
{props.description}
  </p>
</div>
    </div>
  )
}

export default Error

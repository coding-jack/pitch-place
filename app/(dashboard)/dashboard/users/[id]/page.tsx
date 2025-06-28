import React from 'react'

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <h1 className="text-3xl font-bold underline">User Profile: {id}</h1>
  )
}

export default Page

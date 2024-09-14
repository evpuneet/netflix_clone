import React from 'react'
import { MdDelete } from "react-icons/md";
import { Table } from "flowbite-react";
export default function TableCom({userData}) {
    let {data, setData}=userData
    console.log(data)
    let deleteRow=(currIndex)=>{
        console.log(currIndex)
    }

  return (
    <>
        <div className="overflow-x-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-[60px]">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Shopping Cart
          </h2>
        </div>
        
      <Table striped >
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Phone</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Password</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((eachUser)=>{
            return( 
                <Table.Row className="bg-white dark:text-gray-900 h-16">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-gray-900">
              {'krishan'}
            </Table.Cell>
            <Table.Cell>{eachUser.phone}</Table.Cell>
            <Table.Cell>{eachUser.email}</Table.Cell>
            <Table.Cell>{eachUser.password}</Table.Cell>
            <Table.Cell>
              <button onClick={(index)=>deleteRow} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
              <MdDelete />  
              </button>
            </Table.Cell>
          </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
    </>
  )
}

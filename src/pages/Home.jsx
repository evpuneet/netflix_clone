import React, { useState } from 'react'
import LoginForm from '../common/LoginForm'
import TableCom from '../common/TableCom'

export default function Home() {
    let [data, setData] = useState([])
    let userData={data,setData}
  return (
    <>
        <section className='grid grid-cols-2'>
            <LoginForm userData={userData}/>
            <TableCom userData={userData}/>
        </section>
    </>
  )
}

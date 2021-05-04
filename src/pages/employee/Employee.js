import React from 'react'
import { AddEmployee } from '../../components/add-employee/AddEmployee'
import { DefaultLayout } from '../../components/layout/DefaultLayout'

export const Employee = () => {
    return (
        <DefaultLayout>
            <AddEmployee/>
        </DefaultLayout>
    )
}

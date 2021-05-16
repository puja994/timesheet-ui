import React from 'react'
import { DefaultLayout } from '../../components/layout/DefaultLayout'
import { AddShiftsForm } from '../../components/shifts/AddShiftsForm'
import { TimeSheetTable } from '../../components/timeSheet-table/TimeSheetTable.comp'

export const Shifts = () => {
    return (
        <DefaultLayout>
            
            <TimeSheetTable/>
            <AddShiftsForm />
        </DefaultLayout>
    )
}

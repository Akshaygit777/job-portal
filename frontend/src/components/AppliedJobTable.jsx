import { Badge } from './ui/badge'
import { Table, TableCaption, TableCell, TableHead, TableHeader, TableRow, TableBody} from './ui/table'
import React from 'react'

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs 

        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
          [1,2,3,4].map((item,index) => (
            <TableRow key = {index}>
              <TableCell>20-06-2025</TableCell>
              <TableCell>Frontend Developer</TableCell>
              <TableCell>Google</TableCell>
              <TableCell className="text-right"><Badge className="bg-black text-white rounded-full">Selected</Badge></TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
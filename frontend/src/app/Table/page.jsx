"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button,
  Pagination
} from '@mui/material';

// Sample data for the table (expanded for pagination example)
const allRows = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  timestamp: `2023-05-${String(Math.floor(index / 2) + 1).padStart(2, '0')} ${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:00`,
  name: ['John Doe', 'Jane Smith', 'Bob Johnson', 'Alice Brown', 'Charlie Davis'][Math.floor(Math.random() * 5)],
  actionType: ['Login', 'Logout', 'Update Profile', 'Create Post', 'Delete Comment'][Math.floor(Math.random() * 5)]
}));

export default function UserLogTable() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedRows = allRows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 flex flex-col items-center justify-start p-4">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-white">User Log Table</h1>
          <Button 
            component={Link} 
            href="/"
            variant="contained" 
            className='bg-blue-700 hover:bg-blue-800 px-6 py-2 rounded-lg hover:bg-blue-200 transition-colors duration-300'
          >
            Back to Home
          </Button>
        </div>
        <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', marginBottom: 2 }}>
          <Table sx={{ minWidth: 650 }} aria-label="user log table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>ID</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Timestamp</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Action Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell sx={{ color: 'white' }}>{row.id}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{row.timestamp}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{row.name}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{row.actionType}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="flex justify-center">
          <Pagination 
            count={Math.ceil(allRows.length / rowsPerPage)} 
            page={page} 
            onChange={handleChangePage} 
            sx={{ 
              '& .MuiPaginationItem-root': {
                color: 'white',
              },
              '& .Mui-selected': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
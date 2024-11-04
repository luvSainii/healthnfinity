"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useUser } from './../../context/userContext';
import axios from 'axios';
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
import toast, { Toaster } from 'react-hot-toast';

export default function UserLogTable() {
  const { user } = useUser();
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/logs'); // Update to your endpoint
        setRows(response.data); 
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleDelete = async (id) => {
    if (!user || user.role !== "admin") {
       toast.error("Only admins can delete logs.");
       return;
    }

    try {
       await axios.put(`http://localhost:4000/api/logs/delete/${id}`);
       setRows(rows.filter(row => row._id !== id)); // Correct the filter condition
       toast.success("Log marked as deleted.");
    } catch (error) {
       toast.error("Failed to delete log.");
    }
  };

  const paginatedRows = rows.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <>
      <Toaster/>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 flex flex-col items-center justify-start p-4">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl w-full max-w-4xl">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">User Log Table</h1>
            <Button 
              component={Link} 
              href="/"
              variant="contained" 
              className='bg-blue-700 px-6 py-2 rounded-lg hover:bg-blue-200 transition-colors duration-300'
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
                  {user && user.role === "admin" && <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Actions</TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedRows.map((row) => (
                  <TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ color: 'white' }}>{row._id}</TableCell>
                    <TableCell sx={{ color: 'white' }}>{row.timestamp}</TableCell>
                    <TableCell sx={{ color: 'white' }}>{row.userId?.name}</TableCell><TableCell sx={{ color: 'white' }}>{row.actionType}</TableCell>
                    {user && user.role === "admin" && (
                      <TableCell sx={{ color: 'white' }}>
                        <Button 
                          onClick={() => handleDelete(row._id)} // Use row._id for the delete function
                          variant="contained" 
                          color="error"
                        >
                          Delete
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="flex justify-center">
            <Pagination 
              count={Math.ceil(rows.length / rowsPerPage)} 
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
    </>
  );
}

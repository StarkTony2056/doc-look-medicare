import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

function CategorySearch() {

  return (
    <div className='mb-10 items-center flex flex-col gap-3 px-4'>
      <h2 className='font-bold text-4xl tracking-wide'>
        Search <span className='text-primary'>Doctor</span>
      </h2>
      <h2 className='text-gray-600 text-xl'>
        Search Your Doctor and Book Appointment in one click
      </h2>
  
      <div className="flex flex-row items-center gap-2 mt-3">
        <TextField
          label="Search Doctor"
          variant="outlined"
          size="small"
          className="h-10"
        />
        <Button
          variant="contained"
          startIcon={<SearchIcon/>} 
          className="h-10 bg-primary text-white" 
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default CategorySearch;

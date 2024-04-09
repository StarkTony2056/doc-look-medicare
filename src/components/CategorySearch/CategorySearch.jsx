import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import categoryData from './categoryData.json'; 

function CategorySearch() {

  return (
    <div className='mb-0 mt-10 items-center flex flex-col gap-3 px-4'>
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

      {/* Display List of category doctors */}
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7'>
        {categoryData.map((item, index) => ( 
          <DoctorCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function DoctorCard({ item }) {
  return (
    <div className='flex flex-col items-center text-center p-3 mt-5 bg-blue-50 m-2 rounded-lg gap-2 hover:scale-110 transition-all ease-in-out cursor-pointer'>
      <img src={item.image} alt="icon" width={60} height={60} className="mx-auto"/>
      <label className="text-xs md:text-sm lg:text-base xl:text-lg">{item.name}</label>
    </div>
  );
}

export default CategorySearch;

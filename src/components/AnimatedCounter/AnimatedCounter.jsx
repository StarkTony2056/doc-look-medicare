import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faCalendarAlt, faCalendarWeek, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer'; // Import the useInView hook

const AnimatedCounter = () => {
  const [totalDoctors, setTotalDoctors] = useState(0);
  const [doctorsPerMonth, setDoctorsPerMonth] = useState(0);
  const [doctorsPerWeek, setDoctorsPerWeek] = useState(0);
  const [totalPatients, setTotalPatients] = useState(0);

  // Mock data for demonstration purposes
  const mockData = {
    totalDoctors: 5000,
    doctorsPerMonth: 600,
    doctorsPerWeek: 200,
    totalPatients: 200000,
  };

  // useInView hook to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  useEffect(() => {
    let timeoutIds = [];

    if (inView) {
      timeoutIds = [
        animateCounter(totalDoctors, mockData.totalDoctors, setTotalDoctors),
        animateCounter(doctorsPerMonth, mockData.doctorsPerMonth, setDoctorsPerMonth),
        animateCounter(doctorsPerWeek, mockData.doctorsPerWeek, setDoctorsPerWeek),
        animateCounter(totalPatients, mockData.totalPatients, setTotalPatients),
      ];
    }

    // Clear timeout intervals on component unmount or when not in view
    return () => {
      timeoutIds.forEach(clearTimeout);
    };
  }, [inView]); // Re-run effect when 'inView' changes

  // Function to animate the counter
const animateCounter = (currentValue, targetValue, setter) => {
  const duration = 1000; // Animation duration in milliseconds (adjust as needed)
  const increment = Math.ceil((targetValue - currentValue) / (duration / 10)); // Calculate increment dynamically
  let newValue = currentValue;
  const timeoutIds = [];

  for (let i = 1; i <= duration / 10; i++) { // Adjust the loop based on the duration
    timeoutIds.push(setTimeout(() => {
      newValue += increment;
      setter(newValue);
    }, i * 10)); // Update every 10 milliseconds
  }

  return timeoutIds;
};


  return (
    <div className="bg-gray-200 w-full dark:bg-gray-700 flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" ref={ref}>
        <h2 className='font-bold text-4xl tracking-wide text-center mb-5'>
          Doctor <span className='text-primary'>Statistics</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Each statistic is represented as a card */}
          {['Total Doctors', 'Doctors per month', 'Doctors per week', 'Total Patients'].map((title, index) => (
            <div key={index} className="bg-white rounded-lg shadow overflow-hidden dark:bg-gray-800">
              <div className="px-4 py-5 sm:p-6 flex items-center justify-between">
                <div className="flex items-center">
                  {index === 0 && <FontAwesomeIcon icon={faUserMd} className="h-8 w-8 text-blue-500 dark:text-blue-400 mr-3" />}
                  {index === 1 && <FontAwesomeIcon icon={faCalendarAlt} className="h-8 w-8 text-green-500 dark:text-green-400 mr-3" />}
                  {index === 2 && <FontAwesomeIcon icon={faCalendarWeek} className="h-8 w-8 text-yellow-500 dark:text-yellow-400 mr-3" />}
                  {index === 3 && <FontAwesomeIcon icon={faUsers} className="h-8 w-8 text-purple-500 dark:text-purple-400 mr-3" />}
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      {index === 0 && totalDoctors}
                      {index === 1 && doctorsPerMonth}
                      {index === 2 && doctorsPerWeek}
                      {index === 3 && totalPatients}
                    </p>
                  </div>
                </div>
                <p className={`text-sm font-medium ${index === 0 ? 'text-blue-500 dark:text-blue-400' : index === 1 ? 'text-green-500 dark:text-green-400' : index === 2 ? 'text-yellow-500 dark:text-yellow-400' : 'text-purple-500 dark:text-purple-400'}`}>
                  + {index === 0 && mockData.totalDoctors.toLocaleString()}
                  {index === 1 && mockData.doctorsPerMonth.toLocaleString()}
                  {index === 2 && mockData.doctorsPerWeek.toLocaleString()}
                  {index === 3 && mockData.totalPatients.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;

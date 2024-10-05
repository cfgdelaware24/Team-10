// main.js or App.js
import useStore from './store.js';

const main = async () => {
  const { searchForProfessionals, searchForPositions } = useStore.getState();

  // Test logging for searchForProfessionals
  await searchForProfessionals('6700a3f131033d2b681fc7d0'); // Replace with actual position ID

  // Test logging for searchForPositions
  await searchForPositions('67009c5c6f5ff726361f4cc5'); // Replace with actual professional ID
};

// Call the main function to execute the tests
main();

import { electricalBasics } from './electricalBasics';
import { quantumComputing } from './quantumComputing';

export const allCourses = {
  'electrical-basics': electricalBasics,
  //'quantum-computing': quantumComputing,
};

export const coursesArray = Object.values(allCourses);

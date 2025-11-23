import { electricalBasics } from './electricalBasics';
import { quantumComputing } from './quantumComputing';
import { microprocessor } from './microprocessor';
import { microcontroller } from './microcontroller';
import { networking } from './networking';
import { embeddedFirmware } from './embedded-firmware/index.js';
import { cProgramming } from './c-programming/index.js';

export const allCourses = {
  'electrical-basics': electricalBasics,
  'microprocessor': microprocessor,
  'microcontroller': microcontroller,
  'networking': networking,
  'embedded-firmware': embeddedFirmware,
  'c-programming': cProgramming,
  //'quantum-computing': quantumComputing,
};

export const coursesArray = Object.values(allCourses);

// spread operator ...
const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges2);

// spread operator must be used if we want to pass the array as parameter in math.max func
const max = Math.max(...ages);
console.log(max);
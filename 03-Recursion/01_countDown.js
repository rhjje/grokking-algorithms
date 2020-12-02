const countdown = i => {
  console.log(i);
  
  if (i <= 0) return;
  countdown(i - 1);
};

countdown(5); 

// 5
// 4
// 3
// 2
// 1
// 0 
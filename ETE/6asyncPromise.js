async function stepOne() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Step 1 done");
    }, 1000);
  });
}

async function stepTwo() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Step 2 done");
    }, 1000);
  });
}

async function stepThree() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Step 3 done");
    }, 1000);
  });
}

async function sequentialExecution() {
  const result1 = await stepOne();
  console.log(result1);

  const result2 = await stepTwo(result1);
  console.log(result2);

  const result3 = await stepThree(result2);
  console.log(result3);

}

sequentialExecution()


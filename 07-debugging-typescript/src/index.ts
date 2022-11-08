console.clear();

function main() {
  console.log("Program is starting");

  try {
    throw ""
  } catch (err) {
    console.log("Failed to start, retrying");
    setTimeout(() => {
      main();
    }, 3000);
  }
}

main();

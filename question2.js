function delayedGreeting(name) {
    // Use setTimeout to create a delay for 2 seconds
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
    }, 2000);
  }
  
  // Example usage:
  delayedGreeting("Alice"); // It dispalys "Hello, Alice!" after 2 seconds
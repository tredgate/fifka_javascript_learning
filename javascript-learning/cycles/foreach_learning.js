const elements = ["button1", "field1", "radio"];

elements.forEach((element) => {
  console.log(element);
});

elements.forEach((element, index) => {
  console.log(`Element pořadí: ${index}, název: ${element}`);
});

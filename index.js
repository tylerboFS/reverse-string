const reverseString = (str) => {
  if (typeof str !== "string") {
    return undefined;
  }

  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }

  return reverseString;
};

const onReverseButtonClick = () => {
  const input = document.querySelector("input");
  const output = document.querySelector("#output");
  output.innerText = reverseString(input.value);
};

if (typeof module === "undefined") {
  //Browser
  const button = document.querySelector("button");
  button.addEventListener("click", onReverseButtonClick);
} else {
  //Node
  module.exports = {
    reverseString,
    onReverseButtonClick
  };
}

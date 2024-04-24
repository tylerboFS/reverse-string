/**
 * @jest-environment jsdom
 */

const { onReverseButtonClick } = require("../index");
const { fireEvent } = require("@testing-library/dom");


const resetDOM = () => {
  document.body.innerHTML = `
    <main>
      <h1>String Reverser</h1>
      <label>
        Type something:
        <input type="text" />
      </label>
      <button>Reverse!</button>
      Output: <span id="output"></span>
    </main>
  `;
  const button = document.querySelector("button");
  button.addEventListener("click", onReverseButtonClick);
};

describe("The reverse button", () => {
  beforeEach(resetDOM);

  test("reverses the input string", () => {
    const input = document.querySelector("input");
    const output = document.querySelector("#output");
    const button = document.querySelector("button");

    input.value = "hello";

    expect(output.innerText).toBe(undefined);

    fireEvent.click(button);

    expect(output.innerText).toBe("olleh");
  });

  test("reverses the input string with spaces and punctuation", () => {
    const input = document.querySelector("input");
    const output = document.querySelector("#output");
    const button = document.querySelector("button");

    input.value = "hello world!";

    expect(output.innerText).toBe(undefined);
    
    fireEvent.click(button);

    expect(output.innerText).toBe("!dlrow olleh");
  });
});

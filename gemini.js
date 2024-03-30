// Import map emulation
const importMap = {
  imports: {
    "@google/generative-ai": "https://esm.run/@google/generative-ai",
  },
};
{
  /* <script type="importmap">
      {
        "imports": {
          "@google/generative-ai": "https://esm.run/@google/generative-ai"
        }
      }
    </script> */
}

import { GoogleGenerativeAI } from "@google/generative-ai";
$(document).ready(function () {
  const API_KEY = "AIzaSyAajnAeMJ9H6gBn5yMVk0ZjU8zyCQeGtSA";

  const genAI = new GoogleGenerativeAI(API_KEY);

  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const userInput = $("#message-input").val().trim();

    if (userInput === "") {
      return; // Do not proceed if the input is empty
    }

    const result = await model.generateContent(userInput);

    const response = await result.response;

    const text = response.text();

    console.log(text);
  }

  $("#send-btn").click(run);

  $("#user-input").keypress(function (event) {
    if (event.key === "Enter") {
      run();
    }
  });
});

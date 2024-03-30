$(document).ready(function () {
  $("#send-btn").click(function () {
    sendMessage();
  });
  $("#message-input").keypress(function (event) {
    if (event.keyCode === 13) {
      // Enter key
      sendMessage();
    }
  });
});

async function sendMessage() {
  const messageInput = $("#message-input").val();

  if (!messageInput) {
    alert("Please enter a message.");
    return;
  }

  const url = "https://chatgpt-42.p.rapidapi.com/conversationgpt4";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "5a970fac5fmsh6a03f9daa55660ep15436cjsn235d292b35cd",
      "X-RapidAPI-Host": "chatgpt-42.p.rapidapi.com",
    },
    body: JSON.stringify({
      messages: [
        {
          role: "user",
          content: messageInput,
        },
      ],
      system_prompt: "",
      temperature: 0.9,
      top_k: 5,
      top_p: 0.9,
      max_tokens: 256,
      web_access: false,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();

    document.getElementById("text1").innerText = result;
    console.log(result);
  } catch (error) {
    console.error(error);
    alert("An error occurred while sending message.");
  }
}

fetch("https://akhil-06.github.io/emoji_project/emojiList.js")
  .then((response) => {
    if (!response) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Assuming the data is in JSON format
  })
  .then((data) => {
    // Use the fetched data here
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

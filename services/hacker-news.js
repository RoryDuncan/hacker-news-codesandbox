const baseURL = "https://hacker-news.firebaseio.com/v0/";
const fetchOptions = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const getTopStories = async (numberOfStories = 10) => {
  const response = await fetch(`${baseURL}topstories.json`, fetchOptions);
  const topItems = await response.json();
  console.group("calls");
  const result = Promise.all(
    topItems.slice(0, numberOfStories).map(async (id) => {
      const response = await fetch(`${baseURL}/item/${id}.json`);
      console.log(`fetching ${id}`);
      return response.json();
    })
  );

  console.groupEnd("calls");
  return result;
};

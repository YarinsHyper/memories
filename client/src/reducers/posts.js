// eslint-disable-next-line
const posts = (postsArr = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...postsArr, action.payload];

    default:
      return postsArr;
  }
};

export default posts;

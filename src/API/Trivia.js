import axios from "axios";
export default axios.create({
  baseURL: "https://opentdb.com",
  params: {
    amount: 10,
    category: 18,
    difficulty: "easy"
  }
});

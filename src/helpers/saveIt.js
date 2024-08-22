export default async function saveIt(id, messages) {
  let res = await axios({
    method: "POST",
    url: "https://hangout-ai-c81439a5ea16.herokuapp.com/chats/" + id,
    headers: {
      access_token: localStorage.getItem("access_token")
    },
    data: {
      messages
    }
  })
}
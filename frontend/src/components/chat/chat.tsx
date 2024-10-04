
Carl Bieneck
  2:51 PM
import { Message } from "./message";
import { SendButton } from "./button";
async function getCurrentUser() {
  return { id: 1, name: "Obi-Wan Kenobi" };
}
let messageData: any[] = [];
async function getMessages(formData: FormData) {
  'use server'
  const response = await fetch("http://localhost:3001/messages");
  messageData = await response.json();
  console.log(messageData)
  return messageData;
}
async function sendMessage(formData: FormData) {
  'use server';
  const message = {
    message: {
      name:formData.get('message')
    }
  }
  const response = await fetch("http://localhost:3001/messages", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message)
  })
}
export async function Chat() {
  return (
    <article>
      <section className="py-4">
        {/* {messages.map((message) => (
          <Message
            key={message.id}
            currentUserId={currentUser.id}
            author={message.author}
            message={message.message}
          />
        ))} */}
      </section>
      <form action={sendMessage} className="form-control flex flex-row gap-2 w-full">
        <input
          className="input input-bordered w-full"
          type="text"
          placeholder="Type a message"
          id="message"
          name="message"
        />
        <button type="submit" className="btn btn-primary">Fetch</button>
      </form>
    </article>
  );
}
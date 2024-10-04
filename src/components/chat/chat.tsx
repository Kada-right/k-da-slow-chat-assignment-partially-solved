import { Message } from "./message";

async function getCurrentUser() {
  return { id: 1, name: "Obi-Wan Kenobi" };
}

async function getMessages() {
  return [
    {
      id: 1,
      author: { id: 1, name: "Obi-Wan Kenobi" },
      message: "It's over Anakin, I have the high ground.",
    },
    {
      id: 2,
      author: { id: 2, name: "Anakin Skywalker" },
      message: "You underestimate my power!",
    },
  ];
}

export async function Chat() {
  const messages = await getMessages();
  const currentUser = await getCurrentUser();

  return (
    <article>
      <section className="py-4">
        {messages.map((message) => (
          <Message
            key={message.id}
            currentUserId={currentUser.id}
            author={message.author}
            message={message.message}
          />
        ))}
      </section>

      <form className="form-control flex flex-row gap-2 w-full">
        <input
          className="input input-bordered w-full"
          type="text"
          placeholder="Type a message"
          id="message"
          name="message"
        />
        <button className="btn btn-primary">Send</button>
      </form>
    </article>
  );
}

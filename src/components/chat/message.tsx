type Props = {
  currentUserId: number;
  author: { id: number; name: string };
  message: string;
};

export function Message({ currentUserId, author, message }: Props) {
  return (
    <div
      className={
        currentUserId === author.id ? "chat chat-start" : "chat chat-end"
      }
    >
      <div className="chat-header">{author.name}</div>
      <div className="chat-bubble">{message}</div>
    </div>
  );
}

import express, { Request, Response , Application } from 'express';
import cors from 'cors';

const app: Application = express();
const port = 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    preflightContinue: true,
  }),
);

const messages = [
  {
    name: "Leo",
  },
  {
    name: "Carl",
  },
  {
    name: "Anton",
  }
]

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hej från backend');
});

app.get('/messages', (req: Request, res:Response) => {
  res.json(messages);
  // Skicka tillbaka alla message som vi har lagrat; vart? db/fil,
  //
})

app.post('/messages', (req: Request, res:Response) => {
  // Req.body från frontend, värdet från input field, skickas när man klickar submit. 
  // Lagra det meddelandet i våran db/fil
  res.json("Skikade ett message");
})


app.listen(port, () => {
  console.log(`Server is running 🚀 at http://localhost:${port}\n'Cmd + click' the link above ☝️ to open it in the browser.`);
});
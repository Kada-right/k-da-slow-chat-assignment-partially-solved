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

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hej från backend');
});


app.listen(port, () => {
  console.log(`Server is running 🚀 at http://localhost:${port}\n'Cmd + click' the link above ☝️ to open it in the browser.`);
});
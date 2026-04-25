import express from 'express';
import fileRoutes from './app/routes/routes.js';
const port = 3000;

const app = express();

app.use(express.json()); // ISSO PRECISA VIR ANTES DAS ROTAS
app.use("/files", fileRoutes);

app.listen(port, () => {
  console.log("🚀 SERVIDOR RODANDO NA PORTA 3000");
});
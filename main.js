import pg from 'pg';

const { Client } = pg;

const client = new Client({
  host: 'YOUR_HOST',
  port: 5432,
  database: 'YOUR_DATABASE',
  user: 'YOUR_USER',
  password: 'YOUR_PASSWORD',
  ssl: { rejectUnauthorized: false },
  channelBinding: 'require',
});

await client.connect();

// Resetar/Cargar la BDD

// 1. Listado de eventos del dia 2024-01-06

// 2. Borrar todos los eventos de Parque de la Ciudad

// 3. Modificar el aforo del Burger Fest a 4000

// 4a. Obtener el evento con mas aforo

// 4b. Insertar ese evento con fecha de hoy

// 5. Los 5 barrios con mas eventos

await client.end();

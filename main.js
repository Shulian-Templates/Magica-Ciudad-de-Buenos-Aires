import pg from 'pg';
import { resetearBDD } from './resetearBDD.js';
const { Client } = pg;

const client = new Client({
  host: 'DB_HOST',
  port: 5432,
  database: 'DB_NAME',
  user: 'DB_OWNER',
  password: 'DB_PASSWORD',
  ssl: { rejectUnauthorized: false },
  channelBinding: 'require',
});


// Resetar/Cargar la BDD
//await resetearBDD(client);

async function getEventosDelDia(fecha) {
}

async function borrarEventosPorLugar(lugar) {
}

async function modificarAforo(evento, nuevoAforo) {
}

async function duplicarEventoMasAforo() {
}

async function getBarriosMasEventos() {
}

// Abro conexion a BD
await client.connect();

// 1. Listado de eventos del dia 2024-01-06
const eventos =await getEventosDelDia('2024-01-06')

// 2. Borrar todos los eventos de Parque de la Ciudad
const result = await borrarEventosPorLugar('Parque de la Ciudad')

// 3. Modificar el aforo del Burger Fest a 4000
const result2 = await modificarAforo('Burger Fest', 4000)

// 4a. Obtener el evento con mas aforo
// 4b. Insertar ese evento con fecha de hoy
const result3 = await duplicarEventoMasAforo();

// 5. Los 5 barrios con mas eventos
const barrios = await getBarriosMasEventos();

// Cierro conexion a BD
await client.end();
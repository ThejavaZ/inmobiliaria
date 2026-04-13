# 🏢 Inmobiliaria Sarmiento - API REST con NestJS & MongoDB

Proyecto de administración de base de datos NoSQL para la gestión de propiedades inmobiliarias. Este sistema utiliza un modelo orientado a documentos para optimizar las consultas de bienes raíces y características complejas de inmuebles.

## 🛠️ Tecnologías Utilizadas

- **Framework:** [NestJS](https://nestjs.com/) (Node.js)
- **Base de Datos:** [MongoDB](https://www.mongodb.com/) (Motor NoSQL)
- **ODM:** [Mongoose](https://mongoosejs.com/)
- **Gestor de Paquetes:** `pnpm`
- **SO de Administración:** Fedora Linux 43

---

## 📋 Estructura del Modelo de Datos (BSON)

A diferencia de un modelo relacional (SQL), este proyecto utiliza **documentos embebidos** para reducir la latencia de red al evitar `JOINs`.

```json
{
  "title": "Penthouse Vista Hermosillo",
  "price": 4500000,
  "location": {
    "address": "Blvd. Kino 123",
    "neighborhood": "Pitic"
  },
  "features": {
    "rooms": 3,
    "amenities": ["Alberca", "Gimnasio"]
  }
}
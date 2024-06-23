//importamos la conexion a la DB
import connection from "./database.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const Model = connection.define("ahorros", {
    subNombre: { type: DataTypes.STRING},
    movimientos: {type: DataTypes.STRING},
    estado: { type: DataTypes.STRING},
    resumen: { type: DataTypes.STRING},
    tipificacion: { type: DataTypes.STRING},
})

export default Model

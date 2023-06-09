import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gastosSchema = new Schema(
  {
    descripcion: { type: String, required: true },    
    importe: { type: Number, required: true },
    fecha: { type: Date, required: true },
    tipo: { type: String, required: true },
    modoPago: { type: String, required: true },
    
  },
  {
    timestamps: true,
  }
);

const Gastos = mongoose.model('Gastos',gastosSchema );

export { Gastos }
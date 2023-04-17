import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ingresosSchema = new Schema(
  {
    descripcion: { type: String, required: true },    
    importe: { type: Number, required: true },
    fecha: { type: Date, required: true },
    tipo: { type: String, required: true },
    
  },
  {
    timestamps: true,
  }
);

const Ingresos = mongoose.model('Ingresos',ingresosSchema );

export { Ingresos }
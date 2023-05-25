import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tareasSchema = new Schema(
  {
    descripcion: { type: String, required: true },    
    prioridad: { type: String, required: true },
    fecha: { type: Date, required: true },
    tipo: { type: String, required: true },
    
  },
  {
    timestamps: true,
  }
);

const Tareas = mongoose.model('Tareas',tareasSchema );

export { Tareas }
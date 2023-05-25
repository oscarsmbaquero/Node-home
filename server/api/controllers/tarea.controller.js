import { httpStatusCode } from "../../utils/httpStatusCode.js";
// import { Gastos } from "../models/GastoModel.js";
import { Tareas } from "../models/TareasModel.js";
import { ObjectId } from "mongodb";

const getTareas = async (req, res, next) => {
  console.log("Entro");
  try {
    const tareas = await Tareas.find();
    // .populate({ path: "materialIntervencion",select: "descripcion"})
    // .populate({path:'cliente', select :""})
    console.log(tareas, 12);
    return res.status(200).json(tareas);
    // return res.json({
    //   //  status : 200,
    //   //  message : httpStatusCode[200],
    //   data: { avisos: avisos },
    // });
    res.send(tareas);
  } catch (error) {
    return next(error);
  }
};

const addTarea = async (req, res, next) => {
  console.log("Entro");
  console.log(req.body, 46);
  try {
    const NewTarea = new Tareas({
      descripcion: req.body.descripcion,
      prioridad: req.body.prioridad,
      fecha: req.body.fecha,
      tipo: req.body.tipo,
      
    });
    const newTareaDB = await NewTarea.save();
    return res.json({
      status: 201,
      message: httpStatusCode[201],
      data: { tarea: newTareaDB },
    });
  } catch (error) {
    return next(error);
  }
};

export { getTareas, addTarea };

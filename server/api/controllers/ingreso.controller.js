import { httpStatusCode } from "../../utils/httpStatusCode.js";
// import { Gastos } from "../models/GastoModel.js";
import { Ingresos } from "../models/IngresoModel.js";
import { ObjectId } from "mongodb";

const getIngreso = async (req, res, next) => {
  console.log("Entro");
  try {
    const ingresos = await Ingresos.find();
    // .populate({ path: "materialIntervencion",select: "descripcion"})
    // .populate({path:'cliente', select :""})
    console.log(ingresos, 12);
    return res.status(200).json(ingresos);
    // return res.json({
    //   //  status : 200,
    //   //  message : httpStatusCode[200],
    //   data: { avisos: avisos },
    // });
    res.send(ingresos);
  } catch (error) {
    return next(error);
  }
};

const ingresoDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const gastos = await Ingresos.findById(id);
    // .populate({ path: "materialIntervencion",select: "descripcion"})
    // .populate({path:'cliente', select :''})
    return res.status(200).json(gastos);

    return res.json({
      //  status : 200,
      //  message : httpStatusCode[200],
      data: { gastos: gastos },
    });
    res.send(avisos);
  } catch (error) {
    return next(error);
  }
};

const addIngreso = async (req, res, next) => {
  console.log("Entro");
  console.log(req.body, 46);
  try {
    const NewIngreso = new Ingresos({
      descripcion: req.body.descripcion,
      importe: req.body.importe,
      fecha: req.body.fecha,
      tipo: req.body.tipo,
      
    });
    const newIngresoDB = await NewIngreso.save();
    return res.json({
      status: 201,
      message: httpStatusCode[201],
      data: { ingreso: newIngresoDB },
    });
  } catch (error) {
    return next(error);
  }
};

export { getIngreso, ingresoDetail, addIngreso };

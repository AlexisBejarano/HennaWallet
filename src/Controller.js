//importamos el Modelo
import Model from "./Model.js";

// Metodos para el CRUD

//Mostrar todos los registros
export const getAllModels = async (req, res) => {
    try {
        const models = await Model.findAll()
        res.json(models)
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Mostrar un registro
export const getModel = async (req, res) => {
    try {
        const model = await Model.findAll({
            where:{ id:req.params.id}
        })
        res.json(model[0])
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Crear un registro
export const createModel = async (req, res) => {
    try {
        await Model.create(req.body)
        res.json({"message":"Registro exitoso."})
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Actualizar un registro
export const updateModel = async (req, res) => {
    try {
        await Model.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({"message":"Actualizacion exitososa."})
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Eliminar un registro
export const deleteModel = async (req, res) => {
    try {
        await Model.destroy({
            where: { id: req.params.id}
        })
        res.json({"message":"Eliminacion exitososa."})
    } catch (error) {
        res.json( {message: error.message})
    }
}
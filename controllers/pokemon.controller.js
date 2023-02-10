const Pokemon = require("../models/pokemon.model")

exports.findPokemons = async(req, res) => {
   try { res.status(200).json({
        status: 'success'
    })
} catch (error){
        res.status(500).json({
            status: 'fail',
            message: 'internal server error'
        })
    }
}

exports.findPokemon  = async(req, res) => {
    try { res.status(200).json({
        status: 'success'
    })
} catch (error){
        res.status(500).json({
            status: 'fail',
            message: 'internal server error'
        })
    }
}

exports.createPokemon = async (req, res) => {
    try {
        
        const { name, image} = req.body

        const pokemon = await Pokemon.create({name, image})

        res.status(200).json({
        status: 'success',
        message: 'pokemon created correctly',
        pokemon
    })
} catch (error){
        console.log(error)
        res.status(500).json({
            status: 'fail',
            message: 'internal server error'
        })
    }
}

exports.updatePokemon  = async(req, res) => {
    try { res.status(200).json({
        status: 'success'
    })
} catch (error){
        res.status(500).json({
            status: 'fail',
            message: 'internal server error'
        })
    }
}

exports.deletePokemon  = async(req, res) => {
    try { res.status(200).json({
        status: 'success'
    })
} catch (error){
        res.status(500).json({
            status: 'fail',
            message: 'internal server error'
        })
    }
}
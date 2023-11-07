import User from "../models/User.js"

export const createUser = async(req,res)=>{
    const {name,email,whatsapp}=req.body
    try{
        const userExist = await User.findOne({email})
        if(userExist){
            return res.status(400).json({message:"já existe um usuário cadastrado com esse email"})
        }

        if(!name){
            return res.status(400).json({message:'o nome é obrigatório'})
        }

        if(!email){
            return res.status(400).json({message:'o email é obrigatório'})
        }

        if(!whatsapp){
            return res.status(400).json({message:'o whatsapp é obrigatório'})
        }

        const user = {name,email,whatsapp}
        await User.create(user)
        res.status(201).json(user)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

export const findAllUsers =async(req,res)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

export const findOneUser = async(req,res)=>{
    try{
        const userExist = await User.findById(req.params.id)
        if(!userExist){
            return res.status(404).json({message:"nenhum usuário foi encontrado"})
        }
        res.status(200).json(userExist)
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

export const updateUser = async (req, res) => {
    try {
        const userExist = await User.findById(req.params.id);
        if (!userExist) {
            return res.status(404).json({ message: "Nenhum usuário foi encontrado" });
        }

        // Atualize o usuário com os dados fornecidos no corpo da solicitação
        await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Retorna o documento atualizado
            runValidators: true, // Executa as validações do esquema durante a atualização
        });

        res.status(200).json({ message: "Usuário atualizado com sucesso" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};

export const deleteUser = async(req,res)=>{
    try{
        const userExist = await User.findById(req.params.id)
        if(!userExist){
            return res.status(404).json({message:"nenhum usuário foi encontrado"})
        }

        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"usuário deletado com sucesso."})
        
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}
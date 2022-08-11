import ItemMessage from "../models/itemMessage.js";

export const getItems = async (req, res) => {
    try {
        const itemMessages = await ItemMessage.find();

        res.status(200).json(itemMessages);
    } catch(error){
        res.status(400).json({message: error.message})
    }
}

export const createItem = async (req, res) => {
    const item = req.body;

    const newItem = new ItemMessage(item)

    try {
        await newItem.save();

        res.status(200).json(newItem);
    } catch(error) {
        res.status(400).json({ message: error.message })
    }
}
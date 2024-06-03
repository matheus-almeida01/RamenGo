const axios = require('axios')
const broths = require('../data/broths')
const proteins = require('../data/proteins')

const Controller = {

    async listBroths(req, res) {
        return res.status(200).json(broths)
    }, 

    async listProteins(req, res) {
        return res.status(200).json(proteins)
    },
    
    async order(req, res) {
        const { brothId, proteinId } = req.body;

        const broth = broths.find(b => b.id == brothId);
        const protein = proteins.find(p => p.id == proteinId);

        if (!broth || !protein) {
            return res.status(400).json({ error: 'both brothId and proteinId are required' });
        }

        try {
            const response = await axios.post('https://api.tech.redventures.com.br/orders/generate-id', {}, {
            headers: { 'x-api-key': req.headers['x-api-key'] }
            });

            return res.status(201).json({
            id: response.data.orderId,
            description: `${broth.name} and ${protein.name}`,
            image: ''
            })
        } catch (error) {
            res.status(500).json({ error: 'could not place order' });
        }
    }
}

module.exports = Controller
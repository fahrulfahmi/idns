const fs = require("fs");
const path = require("path");
const Client = require("../models/client");


exports.createClient = async (req, res) => {
    try {
        console.log("📩 Request body:", req.body);
        console.log("📸 Uploaded file:", req.file);

        const { name } = req.body;
        const logo = req.file ? `/uploads/client/${req.file.filename}` : null;

        if (!name || !logo) {
            return res.status(400).json({ message: "❌ Name and logo are required" });
        }

        const client = await Client.create({ name, logo });
        res.status(201).json(client);
    } catch (error) {
        console.error("❌ Error creating client:", error);
        res.status(500).json({ error: error.message });
    }
};

// READ: Ambil semua client
exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json({ message: "Clients retrieved successfully", data: clients });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ: Ambil satu client berdasarkan ID
exports.getClientById = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findByPk(id);
        if (!client) return res.status(404).json({ message: "Client not found" });

        res.status(200).json({ message: "Client retrieved successfully", data: client });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE: Ubah client berdasarkan ID
exports.updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const client = await Client.findByPk(id);
        if (!client) return res.status(404).json({ message: "Client not found" });

        let logo = client.logo;
        if (req.file) {
            // Hapus logo lama jika ada
            if (client.logo) {
                const oldLogoPath = path.join(__dirname, `../${client.logo}`);
                if (fs.existsSync(oldLogoPath)) fs.unlinkSync(oldLogoPath);
            }
            logo = `/uploads/client/${req.file.filename}`;
        }

        await client.update({ name, logo });
        res.status(200).json({ message: "Client updated successfully", data: client });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE: Hapus client berdasarkan ID
exports.deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findByPk(id);
        if (!client) return res.status(404).json({ message: "Client not found" });

        // Hapus file logo jika ada
        if (client.logo) {
            const logoPath = path.join(__dirname, `../${client.logo}`);
            if (fs.existsSync(logoPath)) fs.unlinkSync(logoPath);
        }

        await client.destroy();
        res.status(200).json({ message: "Client deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

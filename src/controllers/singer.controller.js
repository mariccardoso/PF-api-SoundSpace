import SingerModel from "../models/singer.model.js";

class SingerController {
  // Listar todos os cantors
  async getAllSingers(req, res) {
    try {
      const singers = await SingerModel.findAll();
      res.json(singers);
    } catch (error) {
      console.error("Erro ao listar cantors:", error);
      res.status(500).json({ error: "Erro ao listar cantores" });
    }
  }

  // Registrar novo cantor
  async createSinger(req, res) {
    try {
      const {
        name,
        genre,
        biography,
        photoUrl

      } = req.body;
      // Validação básica
      if (!name || !genre || !biography ) {
        return res
          .status(400)
          .json({ error: "Os campos nome, genêro e bio são obrigatórios" });
      }


      // Criar objeto do cantor
      const data = {
        name,
        genre,
        biography,
        photoUrl
      };

      // Criar cantor
      const singer = await SingerModel.create(data);

      return res.status(201).json({
        message: "Cantor criado com sucesso!",
        singer,
      });
    } catch (error) {
      console.error("Erro ao registrar cantor:", error);
      res.status(500).json({ error: "Erro ao registrar cantor" });
    }
  }

  async getSingerById(req, res) {
    const { id } = req.params;
    try {
      const singer = await SingerModel.findById(id);
      if (!singer) {
        return res.status(404).json({ error: "Cantor não encontrado" });
      }
      res.json(singer);
    } catch (error) {
      console.error("Erro ao obter cantor:", error);
      res.status(500).json({ error: "Erro ao obter cantor" });
    }   
  }

  async updateSinger(req, res) {
    const { id } = req.params;
    try {
      const {
        name,
        genre,
        biography,
        photoUrl
      } = req.body;
      // Criar objeto do cantor
      const data = {
        name,
        genre,
        biography,
        photoUrl
      };
      const singer = await SingerModel.update(id, data);
      if (!singer) {
        return res.status(404).json({ error: "Cantor não encontrado" });
      }
      res.json({
        message: "Cantor atualizado com sucesso!",
        singer,
      });
    } catch (error) {
      console.error("Erro ao atualizar cantor:", error);
      res.status(500).json({ error: "Erro ao atualizar cantor" });
    } 
  } 

  async deleteSinger(req, res) {
    const { id } = req.params;
    try { 
      await SingerModel.delete(id);
      res.json({ message: "Cantor excluído com sucesso!" });
    } catch (error) {
      console.error("Erro ao excluir cantor:", error);
      res.status(500).json({ error: "Erro ao excluir cantor" });
    } 
  }

}

export default new SingerController();

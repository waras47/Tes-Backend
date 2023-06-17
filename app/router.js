const router = require('express').Router();
const Barang = require('./model')

router.get('/barang', async (req, res) => {
 try {
   const barang = await Barang.findAll();
   res.json(barang);
 } catch (error) {
   console.error(error);
   res.status(500).json({ error: 'Internal server error' });
 }
}); 



router.delete('/barang/:kode_barang', async (req, res) => {
 try {
   const barang = await Barang.findByPk(req.params.kode_barang);
   if (!barang) {
     return res.status(404).json({ error: 'Barang not found' });
   }
   await barang.destroy();
   res.sendStatus(204);
 } catch (error) {
   console.error(error);
   res.status(500).json({ error: 'Internal server error' });
 }
});

// API Endpoint untuk Penjualan

// Get semua penjualan
router.get('/penjualan', async (req, res) => {
 try {
   const penjualan = await Penjualan.findAll();
   res.json(penjualan);
 } catch (error) {
   console.error(error);
   res.status(500).json({ error: 'Internal server error' });
 }
});

// Tambah penjualan baru
router.post('/penjualan', async (req, res) => {
 try {
   const penjualan = await Penjualan.create(req.body);
   res.json(penjualan);
 } catch (error) {
   console.error(error);
   res.status(500).json({ error: 'Internal server error' });
 }
});

module.exports = router;
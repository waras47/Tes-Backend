const sequelize = require('./config')
const { Sequelize, DataTypes } = require('sequelize');

const Barang = sequelize.define('Barang',{
    kode_barang: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nama_barang: DataTypes.STRING,
    harga_jual: DataTypes.INTEGER,
    harga_beli: DataTypes.INTEGER,
    satuan: DataTypes.STRING,
    kategori: DataTypes.STRING,
  
});


 const Penjualan = sequelize.define('Penjualan',{
    tgl_faktur: DataTypes.DATEONLY,
    no_faktur: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nama_konsumen: DataTypes.STRING,
    kode_barang: DataTypes.STRING,
    jumlah: DataTypes.INTEGER,
    harga_satuan: DataTypes.INTEGER,
    harga_total: DataTypes.INTEGER,
  },
);

// Definisikan relasi antara Barang dan Penjualan
Barang.hasMany(Penjualan, { foreignKey: 'kode_barang' });
Penjualan.belongsTo(Barang, { foreignKey: 'kode_barang' });

module.exports = {Barang, Penjualan};
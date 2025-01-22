import React, { useState } from 'react';

function Tabel() {
  // State untuk menyimpan data yang dimasukkan
  const [data, setData] = useState([]);
  
  // State untuk input form
  const [input, setInput] = useState({ nama: '', email: '', usia: '' });

  // Fungsi untuk menangani perubahan pada input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  };

  // Fungsi untuk menambahkan data ke tabel
  const tambahData = () => {
    if (!input.nama || !input.email || !input.usia) {
      alert("Semua kolom harus diisi!");
      return;
    }

    setData([...data, input]);

    // Reset input setelah data ditambahkan
    setInput({ nama: '', email: '', usia: '' });
  };

  return (
    <div className="container">
      <h2>Form Tabel Input</h2>

      <table className="input-table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Usia</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input 
                    type="text" 
                    name="nama" 
                    value={input.nama} 
                    onChange={handleInputChange} 
                    placeholder="Masukkan nama" 
            /></td>
            <td><input 
                    type="email" 
                    name="email" 
                    value={input.email} 
                    onChange={handleInputChange} 
                    placeholder="Masukkan email" 
            /></td>
            <td><input 
                    type="number" 
                    name="usia" 
                    value={input.usia} 
                    onChange={handleInputChange} 
                    placeholder="Masukkan usia" 
            /></td>
            <td><button onClick={tambahData}>Tambah</button></td>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nama}</td>
              <td>{item.email}</td>
              <td>{item.usia}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>
        {`
          .container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
          }

          h2 {
            text-align: center;
          }

          .input-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }

          .input-table th, .input-table td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
          }

          .input-table th {
            background-color: #f4f4f4;
          }

          .input-table input {
            width: 100%;
            padding: 8px;
            margin: 5px 0;
            border: 1px solid #ccc;
          }

          .input-table button {
            padding: 8px 12px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
          }

          .input-table button:hover {
            background-color: #45a049;
          }
        `}
      </style>
    </div>
  );
}

export default Tabel;

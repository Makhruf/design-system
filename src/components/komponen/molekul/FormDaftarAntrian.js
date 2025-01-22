import React, { useState } from 'react';
import { InputField, SelectField, Button } from '../atoms/InputAtom';

const FormDaftarAntrian = () => {
  const [dataForm, setDataForm] = useState({
    nama: '',
    usia: '',
    jenisKelamin: '',
    keluhan: '',
    jenisLayanan: '',
    jadwal: '',
    kontak: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Daftar Antrian:', dataForm);
    setDataForm({
      nama: '',
      usia: '',
      jenisKelamin: '',
      keluhan: '',
      jenisLayanan: '',
      jadwal: '',
      kontak: '',
    });
  };

  return (
    <div>
      <h2>Formulir Daftar Antrian Kesehatan</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <InputField
            type="text"
            name="nama"
            value={dataForm.nama}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Usia:</label>
          <InputField
            type="number"
            name="usia"
            value={dataForm.usia}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Jenis Kelamin:</label>
          <SelectField
            name="jenisKelamin"
            value={dataForm.jenisKelamin}
            onChange={handleChange}
            options={['Laki-laki', 'Perempuan', 'Lainnya']}
            required
          />
        </div>

        <div>
          <label>Keluhan:</label>
          <textarea
            name="keluhan"
            value={dataForm.keluhan}
            onChange={handleChange}
            required
          />
        </div>

        {/* Jenis Layanan */}
        <div>
          <label>Jenis Layanan:</label>
          <SelectField
            name="jenisLayanan"
            value={dataForm.jenisLayanan}
            onChange={handleChange}
            options={['Konsultasi', 'Pemeriksaan', 'Vaksinasi']}
            required
          />
        </div>

        {/* Jadwal Pilihan */}
        <div>
          <label>Jadwal Pilihan:</label>
          <SelectField
            name="jadwal"
            value={dataForm.jadwal}
            onChange={handleChange}
            options={['Pagi', 'Siang', 'Sore']}
            required
          />
        </div>

        {/* Kontak */}
        <div>
          <label>Kontak (Nomor Telepon):</label>
          <InputField
            type="text"
            name="kontak"
            value={dataForm.kontak}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit">Daftar untuk Antrian</Button>
      </form>
    </div>
  );
};

export default FormDaftarAntrian;

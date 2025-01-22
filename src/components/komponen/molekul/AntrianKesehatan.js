import React, { useState } from 'react';
import { InputField, SelectField, Button } from '../atoms/InputAtom';

const FormAntrianKesehatanWithDate = () => {
  const [dataForm, setDataForm] = useState({
    nama: '',
    usia: '',
    jenisKelamin: '',
    keluhan: '',
    jadwal: '',
    kontak: '',
    appointmentDate: '',
    acceptedTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDataForm({
      ...dataForm,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Antrian Terdaftar:', dataForm);
    setDataForm({
      nama: '',
      usia: '',
      jenisKelamin: '',
      keluhan: '',
      jadwal: '',
      kontak: '',
      appointmentDate: '',
      acceptedTerms: false,
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

        <div>
          <label>Tanggal :</label>
          <InputField
            type="date"
            name="appointmentDate"
            value={dataForm.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={dataForm.acceptedTerms}
              onChange={handleChange}
              required
            />
            Saya menerima syarat dan ketentuan
          </label>
        </div>

        <Button type="submit">Daftar untuk Antrian</Button>
      </form>
    </div>
  );
};

export default FormAntrianKesehatanWithDate;

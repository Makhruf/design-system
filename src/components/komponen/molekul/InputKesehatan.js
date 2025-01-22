import React, { useState } from 'react';
import { InputField, SelectField, Button } from '../atoms/InputAtom';

const FormAntrianKesehatan = () => {
  const [dataForm, setDataForm] = useState({
    nama: '',
    usia: '',
    jenisKelamin: '',
    keluhan: '',
    jadwal: '',
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
    console.log('Antrian Terdaftar:', dataForm);
    setDataForm({
      nama: '',
      usia: '',
      jenisKelamin: '',
      keluhan: '',
      jadwal: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-blue-900">
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
      <div className="mb-4">
  <label className="block text-lg font-semibold p-4">Jadwal Pilihan:</label>
  <SelectField
    name="jadwal"
    value={dataForm.jadwal}
    onChange={handleChange}
    options={['Pagi', 'Siang', 'Sore']}
    required
    className="mt-2 p-2 w-full border border-gray-300 rounded-md"
  />
</div>

      <Button type="submit">Daftar untuk Antrian</Button>
    </form>
  );
};

export default FormAntrianKesehatan;
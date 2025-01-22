import React from 'react';
import dokter from "../../../img/dokter1.webp"

const generateRandomPhoneNumber = () => {
  const prefix = '+62';
  const number = Math.floor(Math.random() * 1000000000) + 600000000;
  return prefix + number;
};

const generateRandomDate = () => {
  const start = new Date(2023, 0, 1);
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toLocaleDateString();
};

function Tabel1() {

  const dataPasien1 = [
    { nama: 'Ahmad', usia: 45, JenisKelamin: 'Cowok', keluhan: 'Pusing', jadwal: 'siang' },
    { nama: 'Budi', usia: 50, JenisKelamin: 'Cowok', keluhan: 'Linu', jadwal: 'pagi' },
    { nama: 'Citra', usia: 30, JenisKelamin: 'Cewek', keluhan: 'Pusing', jadwal: 'sore' },
    { nama: 'Dewi', usia: 60, JenisKelamin: 'Cewek', keluhan: 'Hamil', jadwal: 'siang',backgroundImage: 'https://id.images.search.yahoo.com/images/view;_ylt=AwrKAmLUeJBnW6wW2gfNQwx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzE0YTczOTIwMzViNDc5MGQxZDA4OWQ0MTIzMWYwNDY1BGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fid.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfoto%2Bkesehatan%26type%3DE210ID91215G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D2&w=1024&h=495&imgurl=media.istockphoto.com%2Fid%2F1490320302%2Fid%2Ffoto%2Fkesehatan-asuransi-kesehatan-dan-pemeriksaan-kesehatan-kesehatan-dokter-dan-latar-belakang.jpg%3Fs%3D1024x1024%26w%3Dis%26k%3D20%26c%3DWUQVDvUpbTOv0KHYCgx8AUGXik1XOeQLughOObJezBM%3D&rurl=https%3A%2F%2Fwww.istockphoto.com%2Fid%2Ffoto%2Fkesehatan-asuransi-kesehatan-dan-pemeriksaan-kesehatan-kesehatan-dokter-dan-latar-gm1490320302-514923768&size=57KB&p=foto+kesehatan&oid=14a7392035b4790d1d089d41231f0465&fr2=piv-web&fr=mcafee&tt=Kesehatan+Asuransi+Kesehatan+Dan+Pemeriksaan+Kesehatan+Kesehatan+Dokter+...&b=0&ni=21&no=2&ts=&tab=organic&sigr=jTfoL34aZ.TR&sigb=kOp75wIo.zxq&sigi=ND4Omoe1zKu8&sigt=hbsTLHKBE344&.crumb=Es5i6RKp2Y5&fr=mcafee&fr2=piv-web&type=E210ID91215G0'
    }
  ];

  const dataPasien2 = [
    { nama: 'Eka', usia: 40, JenisKelamin: 'Cewek', keluhan: 'Demam', jadwal: 'malam' },
    { nama: 'Fajar', usia: 28, JenisKelamin: 'Cowok', keluhan: 'Batuk', jadwal: 'siang' },
    { nama: 'Gina', usia: 35, JenisKelamin: 'Cewek', keluhan: 'Sakit Kepala', jadwal: 'pagi' },
    { nama: 'Hendra', usia: 55, JenisKelamin: 'Cowok', keluhan: 'Mual', jadwal: 'sore',gambar: 'th.jpeg'
    },
  ];

  const dataPasien3 = [
    { nama: 'Indah', usia: 25, JenisKelamin: 'Cewek', keluhan: 'Sakit Perut', jadwal: 'pagi' },
    { nama: 'Joko', usia: 38, JenisKelamin: 'Cowok', keluhan: 'Flu', jadwal: 'siang' },
    { nama: 'Lina', usia: 32, JenisKelamin: 'Cewek', keluhan: 'Demam', jadwal: 'malam' },
    { nama: 'Miko', usia: 46, JenisKelamin: 'Cowok', keluhan: 'Pusing', jadwal: 'sore' },
  ];

  const dataPasien2WithContact = dataPasien2.map(pasien => ({
    ...pasien,
    kontak: generateRandomPhoneNumber(),
  }));

  const dataPasien3WithContactAndDate = dataPasien3.map((pasien, index) => ({
    ...pasien,
    tanggal: generateRandomDate(),
    kontak: dataPasien2WithContact[index].kontak,
  }));

  return (
    <div className="container">
      <h2>Daftar Pasien  1</h2>

      <table className="health-table table-1">
        <thead>
          <tr>
            <th>Nama Pasien</th>
            <th>Usia</th>
            <th>Jenis Kelamin</th>
            <th>Penyakit</th>
            <th>Jadwal</th>
            <th>Gambar</th>
          </tr>
        </thead>
        <tbody>
          {dataPasien1.map((pasien, index) => (
            <tr key={index}>

              <td>{pasien.nama}</td>
              <td>{pasien.usia}</td>
              <td>{pasien.JenisKelamin}</td>
              <td>{pasien.keluhan}</td>
              <td>{pasien.jadwal}</td>
              <td>{pasien.gambar}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Daftar Pasien 2</h2>

      <table className="health-table table-2">
        <thead>
          <tr>
            <th>Nama Pasien</th>
            <th>Usia</th>
            <th>Jenis Kelamin</th>
            <th>Penyakit</th>
            <th>Jadwal</th>
            <th>Kontak</th>
          </tr>
        </thead>
        <tbody>
          {dataPasien2WithContact.map((pasien, index) => (
            <tr key={index}>
                        {/* <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={dokter}
              alt={pasien.nama}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                marginRight: '10px'
              }}
            />
            {pasien.nama}
          </div> */}
                  <td
          style={{
            backgroundImage:`url(${dokter})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: '20px',
            textShadow: '1px 1px 2px black',
          }}
        >
          {pasien.nama}
        </td>
              <td>{pasien.usia}</td>
              <td>{pasien.JenisKelamin}</td>
              <td>{pasien.keluhan}</td>
              <td>{pasien.jadwal}</td>
              <td>{pasien.kontak}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Daftar Pasien 3</h2>

      <table className="health-table table-3">
        <thead>
          <tr>
            <th>Nama Pasien</th>
            <th>Usia</th>
            <th>Jenis Kelamin</th>
            <th>Penyakit</th>
            <th>Jadwal</th>
            <th>Kontak</th>
            <th>Tanggal kunjungan</th>
          </tr>
        </thead>
        <tbody>
          {dataPasien3WithContactAndDate.map((pasien, index) => (
            <tr key={index}>
              <td>{pasien.nama}</td>
              <td>{pasien.usia}</td>
              <td>{pasien.JenisKelamin}</td>
              <td>{pasien.keluhan}</td>
              <td>{pasien.jadwal}</td>
              <td>{pasien.kontak}</td>
              <td>{pasien.tanggal}</td>
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
            color: #4CAF50;
            margin-top: 40px;
          }

          .health-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .health-table th, .health-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
            font-size: 14px;
          }

          .health-table td {
            background-color: #f1f1f1;
          }

          .table-1 th {
            background-color: rgb(247, 0, 0); 
            color: rgb(252, 3, 3);
            background-image: url('path/to/your/image.jpg');
          }

          .table-2 th {
            background-color: rgb(3, 252, 3); 
            color: #006600;
          }

          .table-3 th {
            background-color: rgb(8, 8, 243); 
            color: #000066;
          }

          .health-table th {
            color: white;
          }

          .health-table tbody tr:nth-child(odd) {
            background-color: #e9e9e9;
          }

          .health-table tbody tr:nth-child(even) {
            background-color: #f7f7f7;
          }
        `}
      </style>
    </div>
  );
}

export default Tabel1;

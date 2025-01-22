import React from 'react';
import FormAntrianKesehatan from '../molekul/InputKesehatan';
import FormDaftarAntrian from '../molekul/FormDaftarAntrian';
import AntrianKesehatan from '../molekul/AntrianKesehatan';
const Form = () => {
  return (
    <div>
      <h1>Pendaftaran Kesehatan </h1>
      <FormAntrianKesehatan />
      <FormDaftarAntrian/>
      <AntrianKesehatan/>
    </div>
  );
}

export default Form;

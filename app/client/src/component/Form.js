import React, { useState } from 'react';

import M from 'materialize-css';

import axios from 'axios';

import Details from './Details';

export default function Form() {

  const allDates = [
    {
      id: '2019-01',
      name: 'Jan/2019',
    },
    {
      id: '2019-02',
      name: 'Fev/2019',
    },
    {
      id: '2019-03',
      name: 'Mar/2019',
    },
    {
      id: '2019-04',
      name: 'Abr/2019',
    },
    {
      id: '2019-05',
      name: 'Mai/2019',
    },
    {
      id: '2019-06',
      name: 'Jun/2019',
    },
    {
      id: '2019-07',
      name: 'Jul/2019',
    },
    {
      id: '2019-08',
      name: 'Ago/2019',
    },
    {
      id: '2019-09',
      name: 'Set/2019',
    },
    {
      id: '2019-10',
      name: 'Out/2019',
    },
    {
      id: '2019-11',
      name: 'Nov/2019',
    },
    {
      id: '2019-12',
      name: 'Dez/2019',
    },
    {
      id: '2020-01',
      name: 'Jan/2020',
    },
    {
      id: '2020-02',
      name: 'Fev/2020',
    },
    {
      id: '2020-03',
      name: 'Mar/2020',
    },
    {
      id: '2020-04',
      name: 'Abr/2020',
    },
    {
      id: '2020-05',
      name: 'Mai/2020',
    },
    {
      id: '2020-06',
      name: 'Jun/2020',
    },
    {
      id: '2020-07',
      name: 'Jul/2020',
    },
    {
      id: '2020-08',
      name: 'Ago/2020',
    },
    {
      id: '2020-09',
      name: 'Set/2020',
    },
    {
      id: '2020-10',
      name: 'Out/2020',
    },
    {
      id: '2020-11',
      name: 'Nov/2020',
    },
    {
      id: '2020-12',
      name: 'Dez/2020',
    },
    {
      id: '2021-01',
      name: 'Jan/2021',
    },
    {
      id: '2021-02',
      name: 'Fev/2021',
    },
    {
      id: '2021-03',
      name: 'Mar/2021',
    },
    {
      id: '2021-04',
      name: 'Abr/2021',
    },
    {
      id: '2021-05',
      name: 'Mai/2021',
    },
    {
      id: '2021-06',
      name: 'Jun/2021',
    },
    {
      id: '2021-07',
      name: 'Jul/2021',
    },
    {
      id: '2021-08',
      name: 'Ago/2021',
    },
    {
      id: '2021-09',
      name: 'Set/2021',
    },
    {
      id: '2021-10',
      name: 'Out/2021',
    },
    {
      id: '2021-11',
      name: 'Nov/2021',
    },
    {
      id: '2021-12',
      name: 'Dez/2021',
    },
  ];

  /*const api = axios.create({ baseURL: 'api' });
  axios.get(baseURL).then(function (response){
    console.log(response.data);
  })*/

  /*async function getTransactionFrom(period) {
    const { id: yearMonth } = period;
    const { data } = await api.get(`${resource}/period=${yearMonth}`);
  }*/

  const [dateId, setDateId] = useState(allDates[0].id);
  const [dateName, setDateName] = useState(allDates[0].name);
  const [lancamentos, setLancamentos] = useState();
  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const [datas, setDatas] = useState([]);

  // const api = [];


  //Ativando o javascript do materialize

  React.useEffect(() => {
    M.AutoInit();
  }, []);

  //Obter dados do backend
  React.useEffect(() => {
    const api = axios.create({ baseURL: 'api' });
    const RESOURCE = '/transaction';

    async function getTransactionFrom() {
      try {
        const data = await api.get(`${RESOURCE}/${dateId}`);
        setDatas(data);
      } catch (error) {
        console.log('Erro: ' + error);
      }
    }
    getTransactionFrom();
  }, [dateId]);

  //Obter o id do select
  const handleDateChange = (event) => {
    const newDate = (event.target.value);
    setDateId(newDate);
    //const filteredDatas = getTransactionFrom(newDate).then(console.log(filteredDatas));
  }

  const array = Object.assign([], datas.data);

  return (
    <div>
      <div>
        <select className="browser-default" value={dateId} onChange={handleDateChange}>
          {allDates.map((date) => {
            const { id, name } = date;
            return (
              <option key={id} value={id}>
                {name}
              </option>
            )
          })}
        </select>
      </div>
      <div className="col s12">
        <div className="row">
          <div className="input-field col s3">
            <input
              id="Lancamentos:"
              type="number"
              value={array.length}
              readOnly={true} />
            <label className="active" htmlFor="Lancamentos">Lançamentos:</label>
          </div>

          <div className="input-field col s3">
            <input
              id="Receitas:"
              type="number"
              value={receitas}
              readOnly />
            <label className="active" htmlFor="Receitas">Receitas:</label>
          </div>

          <div className="input-field col s3">
            <input
              id="Despesas:"
              type="number"
              value={despesas}
              readOnly />
            <label className="active" htmlFor="Despesas">Despesas:</label>
          </div>

          <div className="input-field col s3">
            <input
              id="Saldo:"
              type="number"
              value={saldo}
              readOnly />
            <label className="active" htmlFor="Saldo">Saldo:</label>
          </div>
        </div>

        <div className="row">
          <div className="input field col s4">
            <a className="waves-effect waves-light btn">+ NOVO LANÇAMENTO</a>
          </div>
          <div className="input-field col s6">
            <input
              id="filtro"
              placeholder="Filtro" />
          </div>
        </div>
      </div>
      <div>
        <Details array={array} />
      </div>
    </div>
  );
}

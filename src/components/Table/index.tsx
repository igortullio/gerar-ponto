import React, { useState, useEffect, FormEvent, useReducer } from 'react';

import convertStringHourToMinutes from 'utils/convertStringHourToMinutes';
import generateHourWithVariation from 'utils/generateHourWithVariation';
import addZeroLeft from 'utils/addZeroLeft';
import convertNumberMinutesToHour from 'utils/convertNumberMinutesToHour';

import * as S from './styles';
import Input from 'components/Input';

interface PropsDays {
  date?: Date;
  in?: string;
  lunchIn?: string;
  lunchOut?: string;
  out?: string;
  total?: string;
}

const Table: React.FC = () => {
  const weekday = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const [days, setDays] = useState<Array<PropsDays>>([]);
  const [dayStart, setDayStart] = useState('');
  const [lunchStart, setLunchStart] = useState('');
  const [lunchDuration, setLunchDuration] = useState('');
  const [dayDuration, setDayDuration] = useState('');
  const [variation, setVariation] = useState('');
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    const date = new Date();
    const daysInMonth = getDaysInMonth(date.getFullYear(), date.getMonth());

    const localDays = [];
    for (let day = 1; day <= daysInMonth; day++) {
      localDays.push({ date: new Date(date.getFullYear(), date.getMonth(), day) });
    }

    setDays(localDays);
  }, []);

  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate();
  }

  function buildLabelDay(date: Date | undefined) {
    return date ? `${addZeroLeft(date?.getDate())}/${addZeroLeft(date?.getMonth() + 1)} - ${weekday[date?.getDay()]}` : 'Error';
  }

  function handleGenerate(e: FormEvent) {
    e.preventDefault();

    const variationNumber = Number(variation);
    const dayDurationNumber = Number(dayDuration);
    const lunchDurationNumber = Number(lunchDuration);

    days.map(day => {
      const entradaNumber = generateHourWithVariation(convertStringHourToMinutes(dayStart), variationNumber);
      const idaAlmocoNumber = generateHourWithVariation(convertStringHourToMinutes(lunchStart), variationNumber);
      const voltaAlmocoNumber = idaAlmocoNumber + convertStringHourToMinutes(lunchDuration);
      const saidaNumber = entradaNumber + convertStringHourToMinutes(String(dayDurationNumber + lunchDurationNumber));

      day.in = convertNumberMinutesToHour(entradaNumber);
      day.lunchIn = convertNumberMinutesToHour(idaAlmocoNumber);
      day.lunchOut = convertNumberMinutesToHour(voltaAlmocoNumber);
      day.out = convertNumberMinutesToHour(saidaNumber);
    });

    forceUpdate();
  }

  return (
    <S.Container>
      <S.TableContainer>
        <S.Table>
          <S.Thead>
            <S.Tr header>
              <S.Th>Dia</S.Th>
              <S.Th>Entrada</S.Th>
              <S.Th>Ida Almoço</S.Th>
              <S.Th>Volta Almoço</S.Th>
              <S.Th>Saída</S.Th>
              <S.Th>Total</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {days.map(day => (
              <S.Tr key={day.date?.getDate()}>
                <S.Td>{buildLabelDay(day.date)}</S.Td>
                <S.Td>{day.in}</S.Td>
                <S.Td>{day.lunchIn}</S.Td>
                <S.Td>{day.lunchOut}</S.Td>
                <S.Td>{day.out}</S.Td>
                <S.Td>{day.total}</S.Td>
              </S.Tr>
            ))}
          </S.Tbody>
        </S.Table>
      </S.TableContainer>
      <S.Actions>
        <S.Generate>
          <S.Title>Gerar novos horários</S.Title>
          <S.Form onSubmit={handleGenerate}>
            <Input name="entrada" label="Entrada" value={dayStart} onChange={e => setDayStart(e.target.value)} />
            <Input name="name" label="Hora Início Almoço" value={lunchStart} onChange={e => setLunchStart(e.target.value)} />
            <Input name="name" label="Duração Almoço" value={lunchDuration} onChange={e => setLunchDuration(e.target.value)} />
            <Input name="name" label="Duração Dia" value={dayDuration} onChange={e => setDayDuration(e.target.value)} />
            <Input name="name" label="Variação" value={variation} onChange={e => setVariation(e.target.value)} />
            <S.Button type="submit">Gerar</S.Button>
          </S.Form>
        </S.Generate>
      </S.Actions>
    </S.Container>
  );
};

export default Table;

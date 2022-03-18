import React from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Input } from '../Input';

import icon from './assets/icon.svg';
import styles from './index.module.css';
import { actions } from '../../store/actions';

export const SearchInput = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = data => {
    dispatch(actions.common.setResultSearchOpened(true));
    dispatch(actions.search.fetchCities(data.search));
    dispatch(actions.search.setWord(data.search));
  };

  return <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
    <Input
      name="search"
      register={register}
      className={styles.input}
      placeholder="Search"
    />
    <button type="submit" className={styles.button}>
      <img src={icon} alt="Start Search" />
    </button>
  </form>;
};

import React, { FC, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SearchInput } from '../SearchInput';
import { Modal } from './components/Modal';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { isCitiesLoading, isCitiesLoaded, getCities, getWord } from '../../store/search/selectors';
import { isSearchResultOpened } from '../../store/common/selectors';
import { actions } from '../../store/actions';
import { Coords } from '../../types/city';

import styles from './index.module.css';

type Props = {
  onAdd: (coords: Coords) => void,
};

export const SearchForm: FC<Props> = ({ onAdd }) => {
  const dispatch = useDispatch();

  const cities = useSelector(getCities);
  const isOpenResult = useSelector(isSearchResultOpened);
  const isLoading = useSelector(isCitiesLoading);
  const isLoaded = useSelector(isCitiesLoaded);
  const word = useSelector(getWord);

  const ref = useRef(null);

  const handleClose = () => {
    dispatch(actions.common.setResultSearchOpened(false));
  }

  useOnClickOutside(ref, handleClose);

  return <div className={styles.container}>
    <SearchInput />
    {isOpenResult && word && <div className={styles.results} ref={ref}>
      <Modal
        cities={cities}
        isLoading={isLoading}
        isLoaded={isLoaded}
        onAdd={onAdd}
        word={word}
      />
    </div>}
  </div>;
};

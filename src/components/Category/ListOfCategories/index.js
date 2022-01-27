import React, { Fragment, useEffect, useState } from 'react';
import { Category } from '../';
import { List, Item } from './styles';

function useCategoryData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true);
    fetch('https://petgram-server-edsf8xpy2.now.sh/categories')
      .then((res) => res.json())
      .then((res) => setCategories(res));
    setLoading(false);
  }, []);

  return { categories, loading };
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoryData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(function () {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  });

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );

  if(loading) return 'Cargando...';

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};

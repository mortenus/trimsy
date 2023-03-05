import axios from 'axios';
import React from 'react';

type TData = {
  data: {
    date: string;
    title: string;
    description: string;
    imgUrl: string;
  };
  slug: string;
  _id: string;
};

const useFetchBlogs = () => {
  const [items, setItems] = React.useState<[] | TData[]>([]);

  React.useEffect(() => {
    axios.get('https://secure.trimsy.org/blogs').then((data: any) => setItems(data.data));
  }, []);

  return { items };
};

export default useFetchBlogs;

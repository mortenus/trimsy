import { axios } from 'core';
import { BlogItem } from 'features/Blog';
import LoadingOverlay from 'features/LoadingOverlay';
import useHideScrollOnTrue from 'hooks/useHideScrollOnTrue';
import { useRouter } from 'next/router';
import React from 'react';

const BlogSearch = () => {
  const [items, setItems] = React.useState([]);
  const router = useRouter();
  const { q } = router.query;

  const [isLoading, setIsLoading] = React.useState(true);
  useHideScrollOnTrue(isLoading);

  React.useEffect(() => {
    if (q !== undefined && q !== '') {
      setIsLoading(true);

      axios
        .get(`https://secure.trimsy.org/blog/search?q=${q}`)
        .then((response) => {
          setItems(response.data);
          setIsLoading;
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [q]);
  return (
    <div className="global-wrapper--small" style={{ padding: '100px 0' }}>
      {isLoading && <LoadingOverlay />}
      {items &&
        items.map((item: any) => (
          <BlogItem
            key={item.slug}
            itemCount={1}
            slug={item.slug && item.slug}
            onClick={undefined}
            // customRef={!item.slug && toNotCloseRef}
            type={item.type && item.type}
            {...item.data}
          />
        ))}
    </div>
  );
};

export default BlogSearch;

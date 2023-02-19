import React from 'react';
import { useRouter } from 'next/router';

// import BlogSVG from 'public/static/img/icons/Blog.svg';
// import CareersSVG from 'public/static/img/icons/Careers.svg';
// import DefaultSVG from 'public/static/img/icons/Icon.svg';

const possibleDepartments = [
  {
    name: undefined,
    link: '/',
  },
  {
    name: 'blog',
    link: '/blog',
  },
  {
    name: 'careers',
    link: '/careers',
  },
];

export function useCheckCurrentDepartment() {
  const [currentDepartment, setCurrentDepartment] = React.useState<string | undefined>(undefined);

  const router = useRouter();

  const handleCheckCurrentDepartment = () => {
    const url = router.pathname.split('/').slice(1, 2).toString();

    if (url === currentDepartment) return;

    url ? setCurrentDepartment(url) : setCurrentDepartment(undefined);
  };

  React.useEffect(() => {
    handleCheckCurrentDepartment();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  const [currentVisibleDepartment, setCurrentVisibleDepartment] = React.useState(
    possibleDepartments[0],
  );

  const handleCheckChoosing = React.useCallback(() => {
    const result = possibleDepartments.find((department) => {
      return department.name === currentDepartment ? department : false;
    });

    if (!result) {
      return setCurrentVisibleDepartment(possibleDepartments[0]);
    }

    setCurrentVisibleDepartment(result);
  }, [currentDepartment]);

  React.useEffect(() => {
    handleCheckChoosing();
  }, [currentDepartment, handleCheckChoosing]);

  return { currentVisibleDepartment };
}

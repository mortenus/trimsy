type TAuthor = {
  fullname: string;
  position: string;
  description: string;
  avatarUrl: string;
};

type TBlogWrapper = {
  children: React.ReactNode;
  info: {
    title: string;
    headerImg: string;
    date: string;
    createdAt: string;
    modifiedAt: string;
    minToRead: number;
    slug: string;
    description: string;
    author: TAuthor;
  };
  nextToReadArr: {
    date: string;
    title: string;
    description: string;
    imgUrl: string;
    slug: string;
  }[];
};

export default TBlogWrapper;

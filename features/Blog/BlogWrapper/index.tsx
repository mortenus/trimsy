import { ImageUnoptimized } from 'components';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NextToRead from '../NextToRead';

import TBlogWrapper from './BlogWrapper.types';

import styles from './BlogWrapper.module.scss';

const BlogWrapper = ({ children, info, nextToReadArr }: TBlogWrapper) => {
  const ArticleSchema = {
    '@context': 'https://schema.org',
    '@id': `https://trimsy.org${info.slug}#article`,
    '@type': 'NewsArticle',
    headline: info.title,
    image: [info.headerImg],
    datePublished: info.createdAt,
    dateModified: info.modifiedAt,
    author: { '@type': 'Person', name: info.author.fullname },
    speakable: {
      '@type': 'SpeakableSpecification',
      xPath: ['//title', "/html/head/meta[@name='description']/@content"],
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trimsy',
      url: 'https://trimsy.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://trimsy.org/images/logo.svg',
        width: 112,
        height: 112,
      },
      sameAs: ['https://www.linkedin.com/company/trimsy'],
    },
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Link href="/blog#search" className={styles.return}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              viewBox="6 6 12 12"
              style={{ rotate: '90deg' }}>
              <path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path>
            </svg>{' '}
            <span>Return</span>
          </Link>
          <h1 className={styles.title}>{info.title}</h1>
          <div className={styles.headerImg}>
            <ImageUnoptimized
              src={info.headerImg}
              width="0"
              height="0"
              //   sizes="100vw"
              priority
              style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover' }}
              alt={'Header Blog Image'}
            />
          </div>

          <div className={styles.date}>
            <span>{info.date}</span>
            <div className={styles.line} />
            <span>{info.minToRead} mins read</span>
          </div>
          {children}
          <div className={styles.author}>
            <div className={styles.img}>
              <Image fill src={info.author.avatarUrl} alt={'Author image'} />
            </div>
            <div className={styles.info}>
              <span>Written by</span>
              <h4 className={styles.name}>{info.author.fullname}</h4>
              <span className={styles.position}>{info.author.position}</span>
              <p className={styles.description}>{info.author.description}</p>
            </div>
          </div>

          <NextToRead arr={nextToReadArr} />
        </div>
      </div>
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:url" content={info.slug} />
        <meta property="og:site_name" content="Social Media Blog" />
        <meta property="og:image" content={info.headerImg} />
        <meta property="og:image:secure_url" content={info.headerImg} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="Easy Steps Create a Social Media Strategy" />
        <meta property="article:section" content="Social Media" />
        <script
          type="application/ld+json"
          async
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ArticleSchema) }}
        />
      </Head>
    </>
  );
};

export default BlogWrapper;

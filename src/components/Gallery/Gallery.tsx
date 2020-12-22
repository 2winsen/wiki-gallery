import React from 'react';
import { WikipediaData } from '../../types/WikipediaData';
import styles from './Gallery.module.css';
import GalleryItem from './GalleryItem/GalleryItem';

interface Props {
  data: WikipediaData;
}

function Gallery({ data }: Props) {
  // const [pageIndex, setPageIndex] = useState(0);
  // const [data, setData] = useState(props.data);
  // const { data, isLoading, isError } = useWikipediaQuery(criteria);
  // const fetchMoreData = () => {
  //   setPageIndex(pageIndex => pageIndex + 1);
  //   // setData(d => ({ ...data, pages: [...d.pages, ...data.pages] }))
  // };


  // const [cnt, setCnt] = useState(1)
  // const pages = []
  // for (let i = 0; i < cnt; i++) {
  //   pages.push(<Page index={i} key={i} />)
  // }

  return (
    <div className={styles.container}>
      {/* <InfiniteScroll
        dataLength={data.pages.length}
        next={fetchMoreData}
        hasMore={Boolean(data.continuePage)}
        loader={<h4>Loading...</h4>}
      > */}
      {data.pages.map(p => <GalleryItem source={p.thumbnail.source} />)}
      {/* </InfiniteScroll> */}
    </div>
  );
}

export default Gallery;
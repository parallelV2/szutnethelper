/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Switch, Route, Link, useLocation } from '@modern-js/runtime/router';
import { Breadcrumb, List } from 'antd';
import './index.less';
import PostDetail from '../PostDetail';

interface MyBreadcrumbProps {
  articleList: any;
}
const MyBreadcrumb: React.FC<MyBreadcrumbProps> = ({ articleList }) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const targetId = pathSnippets[1];
  const target = articleList.find(
    (article: any) => article.id.toString() === targetId,
  ) || { title: '' };
  return (
    <div className="myBreadcrumb">
      <Link to="/" className="back">
        <span>&gt;&gt;&gt;</span>
      </Link>
      <Breadcrumb separator=">">
        <Breadcrumb.Item key="home">
          <Link to="/">
            <span className="text">公告</span>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="text text-flow bread-title">
          {target.title.length <= 12
            ? target.title
            : `${target.title.substr(0, 10)}...`}
          {/* {target.title} */}
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
interface AnnouncementListProps {
  articleList: any;
  setTargetArticle: any;
}
interface TargetArticle {
  title: string;
  id: number;
  op?: string;
}
const AnnouncementList: React.FC<AnnouncementListProps> = ({
  articleList,
  setTargetArticle,
}) => (
  <List
    size={'small'}
    dataSource={articleList}
    split={false}
    renderItem={(item: TargetArticle) => (
      <List.Item>
        <Link
          to={`/post/${item.id}`}
          onClick={() => {
            setTargetArticle(item);
          }}
          className="text-flow">
          {item.title}
        </Link>
      </List.Item>
    )}
  />
);
const Announcement = () => {
  const [articleList, setArticleList] = useState([
    { title: '如何使用本软件', id: 1 },
    { title: '为什么我复制不了ip', id: 2 },
    { title: '可以查网速吗', id: 3 },
    { title: '怎么我断网了', id: 4 },
    {
      title: '我文本比较多，所以想测试一下。我文本比较多，所以想测试一下。',
      id: 5,
    },
  ]);
  const [targetArticle, setTargetArticle] = useState({
    // title: '可以查网速吗（测试）',
    title: '',
    id: 1,
  } as TargetArticle);
  return (
    <div className="announcement container">
      <MyBreadcrumb articleList={articleList} />
      <div className="announcementList">
        <Switch>
          <Route exact={true} path="/">
            <AnnouncementList
              articleList={articleList}
              setTargetArticle={setTargetArticle}
            />
          </Route>
          <Route path="/post/:id">
            <PostDetail />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default Announcement;

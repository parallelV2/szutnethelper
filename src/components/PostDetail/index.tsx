import { Card, Typography } from 'antd';
import { useParams } from '@modern-js/runtime/router';

const PostDetail = () => {
  const articles = [
    {
      id: 1,
      title: '如何使用本软件',
      author: '作者A',
      content: `WebHelper如何使用是怎么回事呢？WebHelper相信大家都很熟悉，
      但是WebHelper如何使用是怎么回事呢，下面就让小编带大家一起了解吧。
      WebHelper如何使用，其实就是怎么用，大家可能会很惊讶WebHelper怎么会如何使用呢
      ？但事实就是这样，小编也感到非常惊讶。这就是关于WebHelper如何使用的事情了，
      大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦!`,
    },
    {
      id: 2,
      title: '为什么我复制不了ip',
      author: '作者B',
      content: `我复制不了ip是怎么回事呢？我相信大家都很熟悉，
      但是我复制不了ip是怎么回事呢，下面就让小编带大家一起了解吧。
      复制不了ip，其实就是不能copyIP，大家可能会很惊讶我怎么会复制不了ip呢？
      但事实就是这样，小编也感到非常惊讶。
      这就是关于我复制不了ip的事情了，
      大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦`,
    },
    {
      id: 3,
      title: '可以查网速吗',
      author: '作者C',
      content: `WebHelper如何使用是怎么回事呢？WebHelper相信大家都很熟悉，
      但是WebHelper如何使用是怎么回事呢，下面就让小编带大家一起了解吧。
      WebHelper如何使用，其实就是怎么用，大家可能会很惊讶WebHelper怎么会如何使用呢
      ？但事实就是这样，小编也感到非常惊讶。这就是关于WebHelper如何使用的事情了，
      大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦!`,
    },
    {
      id: 4,
      title: '怎么我断网了',
      author: '作者D',
      content: `WebHelper如何使用是怎么回事呢？WebHelper相信大家都很熟悉，
      但是WebHelper如何使用是怎么回事呢，下面就让小编带大家一起了解吧。
      WebHelper如何使用，其实就是怎么用，大家可能会很惊讶WebHelper怎么会如何使用呢
      ？但事实就是这样，小编也感到非常惊讶。这就是关于WebHelper如何使用的事情了，
      大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！`,
    },
  ];
  const { id } = useParams<{ id?: string }>();
  const { Title, Paragraph, Text } = Typography;
  const targetArticle = articles.find(item => item.id.toString() === id) || {
    title: '没有找到该文章',
    author: 'null',
    content: '没有找到该文章',
  };
  return (
    <div className="PostDetail">
      <Card>
        <Typography>
          <Title level={3}>{targetArticle.title}</Title>
          <Paragraph>
            <Text>{targetArticle.author}</Text>
          </Paragraph>
          <Paragraph>{targetArticle.content}</Paragraph>
        </Typography>
      </Card>
    </div>
  );
};
export default PostDetail;

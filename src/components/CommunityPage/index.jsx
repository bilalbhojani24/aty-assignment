import CreatePost from '../CreatePost';
import Postcard from '../Postcard';
import PostsData from '../../api/posts';
import { GREETING_TEXT, USERNAME_TEXT } from './constants';

const CommunityPage = () => {
  return (
    <div className="bg-gray-900 text-white-1200 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-3xl xl:max-w-4xl">
        <div className="py-8">
          <h1 className="text-3xl mb-2 text-white-1100">
            Hello {USERNAME_TEXT}
          </h1>
          <p className="text-white-1200 mb-6">{GREETING_TEXT}</p>
          <CreatePost />
          <div className="space-y-4">
            {PostsData.map((post) => (
              <Postcard
                key={post.id}
                name={post.name}
                time={post.time}
                content={post.content}
                comments={post.comments}
                emoji={post.emoji}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;

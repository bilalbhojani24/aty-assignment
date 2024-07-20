import { CREATE_POST_TEXT, POST_TEXT } from './constants';
import { useModal } from '../../contexts/modalContext';

const CreatePost = () => {
  const { openModal } = useModal();

  return (
    <div className="bg-black-1200 p-4 rounded-lg mb-6 border-black-1100 border-2">
      <h2 className="text-xl mb-4 text-white-1100">{CREATE_POST_TEXT}</h2>
      <div className="flex flex-col">
        <div className="bg-black-1300 p-3 rounded-md flex items-center mb-4">
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-black-1200 rounded-full mr-3">
            💬
          </span>
          <input
            type="text"
            placeholder="How are you feeling today?"
            className="bg-transparent w-full outline-none"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-1100 px-12 py-2 rounded-md text-white-1300"
            onClick={() => openModal('register')}
          >
            {POST_TEXT}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

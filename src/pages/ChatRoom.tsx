import ChatRoomTemplate from '../components/template/ChatRoomTemplate';
import Container from '../components/atoms/Container';
import ChatRoomBanner from '../components/organisms/ChatRoomBanner';
import { useLocation } from 'react-router-dom';
import Spinner from '../components/atoms/Spinner';
import * as S from '..//styles/molecules/ProfileBanner';

const ChatRoom = () => {
  const { state } = useLocation();

  // const messageType = "CHAT"
  // const roomId = 1; // 예시로 roomId를 설정
  // const memberId = 1; // 예시로 memberId를 설정
  // const chatContent = 'test 채팅 내용';
  console.log('chatroom page로 가져온 state값 조회', state);

  const chat = state.userinfo;
  return (
    <Container>
      <ChatRoomBanner />
      {state.userinfo ? (
        <ChatRoomTemplate chat={chat} />
      ) : (
        <S.Loading>
          <Spinner />
        </S.Loading>
      )}
    </Container>
  );
};

export default ChatRoom;

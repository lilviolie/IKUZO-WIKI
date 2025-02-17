import React, { useState } from 'react';
import styled from 'styled-components';
import swal from 'sweetalert';
import { useRecoilValue } from 'recoil';
import WithItem from './WIthItem';
import Modal from './Modal';
import getLoginAuth from '../../../hooks/getLoginAuth';
import { isCountSelector } from '../../../recoil/countRecoil';

export interface Root {
  id: string;
}

export type Props = {
  data: Root[];
};

export interface WithProp {
  title: string;
  id: string;
  contents: string;
  location: string;
  people: number;
  time: number;
  joined: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 80%;
  min-height: 70vh;

  gap: 1rem;
`;

const Title = styled.h1`
  font-family: 'IBMPlexSansKR-Regular';
  display: flex;
  justify-content: space-between;

  width: 90%;

  font-size: 2rem;
  font-weight: 700;
  line-height: 7rem;
  border-bottom: 0.2rem solid var(--color-orange);

  .non__highlight {
    color: black;
  }
`;

const Highlight = styled.em`
  color: var(--color-orange);
`;

const EnrollButton = styled.button`
  font-family: 'SBAggroB';
  font-size: 0.8rem;
  color: white;

  margin: auto 0;
  padding: 0.8rem 1.2rem;
  white-space: nowrap;
  border-radius: 1rem;
  border: none;
  background-color: var(--color-primary);
  cursor: pointer;
  transform: translateY(1px);
  transition: 0.2s;

  &:hover {
    transform: translateY(3px);
    background-color: var(--color-btn);
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;

  gap: 2rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const index: React.FC<Props> = ({ data }): JSX.Element => {
  const isLogin = getLoginAuth();
  const isCount = useRecoilValue(isCountSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalData, setModalData] = useState({
    restaurantLocation: '',
    title: '',
    contents: '',
    recruitmentTime: '',
    maxPeople: 0,
  });

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isLogin) {
      swal({
        title: '로그인이 필요합니다.',
        text: '로그인 좋은 말로 할 때 하세요~! 🤬',
        icon: 'warning',
      });
      return;
    }
    if (isCount) {
      swal({
        title: '이미 선택하셨습니다...',
        text: '당신을 기다리고 있는 맛있는 밥 약속이 곧 성사됩니다 😘',
        icon: 'success',
      });
      return;
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLocationChange = (props: string) => {
    setModalData({
      ...modalData,
      restaurantLocation: props,
    });
  };

  const handleInputTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setModalData({
      ...modalData,
      title: event.target.value,
    });
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setModalData({
      ...modalData,
      contents: event.target.value,
    });
  };

  const handleRecruitmentTimeChange = (
    event: React.ChangeEvent<HTMLButtonElement>,
  ) => {
    setModalData({
      ...modalData,
      recruitmentTime: event.target.value,
    });
  };

  const handleMaxPeopleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setModalData({
      ...modalData,
      maxPeople: parseInt(event.target.value, 10),
    });
  };

  return (
    <Container>
      <Title>
        <Highlight>
          같이 먹을 사람 <em className="non__highlight">구해요</em>
        </Highlight>
        <EnrollButton
          type="button"
          onClick={openModal}
        >
          Open Modal
        </EnrollButton>{' '}
      </Title>
      <ItemContainer>
        {data &&
          data.map((item: Root) => {
            const { id } = item;
            const { title, joined, contents, location, people, time } =
              item as WithProp;
            return (
              <ItemWrapper key={id}>
                <WithItem
                  id={id}
                  title={title}
                  contents={contents}
                  location={location}
                  people={people}
                  time={time}
                  joined={joined}
                />
              </ItemWrapper>
            );
          })}
      </ItemContainer>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onLocationChange={handleLocationChange}
        onTitleChange={handleInputTextChange}
        onContentsChange={handleTextareaChange}
        onRecruitmentTimeChange={handleRecruitmentTimeChange}
        onMaxPeopleChange={handleMaxPeopleChange}
      />
    </Container>
  );
};

export default index;

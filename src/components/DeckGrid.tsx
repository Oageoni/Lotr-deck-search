import { useState } from 'react';
import { Card } from '../types';
import { Button } from 'react-bootstrap';
import { Card as BsCard, Modal } from 'react-bootstrap';
const DeckGrid = ({ cards }: { cards: Card[] }) => {
  const [modalCard, setModalCard] = useState<Card | null>(null);
  return (
    <div className='Deck-container'>
      <div className='row col-12 justify-content-center'>
        {cards.map((card) => (
          <BsCard
            key={card.code}
            className='col-12 col-sm-3 Preview'
            onClick={() => setModalCard(card)}
          >
            <BsCard.Img
              variant='top'
              alt={card.name}
              className='Card-img'
              src={`https://ringsdb.com/${card.imagesrc}`}
            />
            <BsCard.Body>
              <p>{card.name}</p>
            </BsCard.Body>
          </BsCard>
        ))}
      </div>
      <Modal
        className='Modal'
        show={!!modalCard}
        onHide={() => setModalCard(null)}
        size='lg'
      >
        <Modal.Title className='Modal-header' id='title'>
          {modalCard?.name}
        </Modal.Title>

        <Modal.Body className='col-12 Card-modal-body'>
          <div className='Card-left col-12  col-sm-6'>
            <div className='col-12'>
              <div
                className='Card-detail-img'
                style={{
                  backgroundImage: `url(https://ringsdb.com/${modalCard?.imagesrc})`,
                }}
              ></div>
            </div>
            <div className='col-12'>
              <div className='Lower-box'>
                <div className='Title-box'>
                  <p>{modalCard?.name}</p>
                </div>
                <div className='Trait-box'>
                  <p>{modalCard?.traits}</p>
                </div>
                <div className='Text-box'>
                  <p>{modalCard?.text.replace(/(<([^>]+)>)/gi, '')}</p>
                </div>
                <div className='Flavor-text-box'>
                  <p>{modalCard?.flavor.replace(/(<([^>]+)>)/gi, '-')}</p>
                </div>
                <div className='Type-box'>
                  <p>{modalCard?.type_name}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='Card-right col-12 col-sm-6'>
            <div className='Info-block'>
              <p>
                <strong>{modalCard?.type_name}. </strong>
                Threat: {modalCard?.threat}
              </p>
              <p>
                {' '}
                <span className='willpower'> {modalCard?.willpower} </span>
                <span className='attack'> {modalCard?.attack} </span>
                <span className='defense'> {modalCard?.defense} </span>
                <span className='health'> {modalCard?.health}</span>
              </p>
              <p className='Smaller-text'>
                {modalCard?.pack_name} #{modalCard?.position}{' '}
                {modalCard?.sphere_name}
              </p>
              <p className='Card-text'>
                {modalCard?.text.replace(/(<([^>]+)>)/gi, '')}
              </p>
            </div>
            <Button className='Close-btn' onClick={() => setModalCard(null)}>
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeckGrid;

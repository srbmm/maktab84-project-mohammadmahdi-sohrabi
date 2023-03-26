import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export function MyModal({modalState, setModalState, children}) {
    return (
        <div>
            <Modal
                isOpen={modalState}
                onAfterOpen={() => {}}
                onRequestClose={() => setModalState(false)}
                style={customStyles}
                contentLabel="modal"
            >
                <button onClick={() => setModalState(false)}
                        className="bg-gray-300 rounded-full h-7 w-7 flex items-center justify-center">X
                </button>
                {children}
            </Modal>
        </div>
    );
}

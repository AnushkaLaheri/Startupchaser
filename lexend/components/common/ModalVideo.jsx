"use client";

const ModalVideo = ({ videoId, isOpen, setIsOpen, src }) => {
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div style={overlayStyle} onClick={closeModal}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} style={closeButtonStyle}>
              ×
            </button>
            <div style={responsiveIframeContainerStyle}>
              <iframe
                src={
                  src
                    ? src
                    : `https://www.youtube.com/embed/${videoId}?autoplay=1`
                }
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={iframeStyle}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Styles

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  position: "relative",
  width: "90%",
  maxWidth: "1100px",
  backgroundColor: "#fff",
  borderRadius: "4px",
  overflow: "hidden",
  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "30px",
  background: "transparent",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  zIndex: 1001,
};

const responsiveIframeContainerStyle = {
  position: "relative",
  paddingBottom: "56.25%", // 16:9 aspect ratio
  height: 0,
  overflow: "hidden",
};

const iframeStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

export default ModalVideo;

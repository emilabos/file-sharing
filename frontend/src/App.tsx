import { useState } from "react";
import { UploadModal } from "./components/UploadModal";
import { ReceiveModal } from "./components/ReceiveModal";
import { Hero } from "./components/Hero";

const App = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isReceiveModalOpen, setIsReceiveModalOpen] = useState(false);

  const openUploadModal = () => setIsUploadModalOpen(true);
  const closeUploadModal = () => setIsUploadModalOpen(false);

  const openReceiveModal = () => setIsReceiveModalOpen(true);
  const closeReceiveModal = () => setIsReceiveModalOpen(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero onUploadClick={openUploadModal} onReceiveClick={openReceiveModal} />

      {/* Upload Modal */}
      <UploadModal isOpen={isUploadModalOpen} onClose={closeUploadModal} />

      {/* Receive Modal */}
      <ReceiveModal isOpen={isReceiveModalOpen} onClose={closeReceiveModal} />
    </div>
  );
};

export default App;

import { useState } from "react";
import axios from "axios";
import API_BASE from '../config';


const AddBlock = () => {
  const [blockData, setBlockData] = useState("");
  const [blockMsg, setBlockMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDataInput = (e) => {
    setBlockData(e.target.value);
  };

  const handleAddBlock = async () => {
    if (!blockData) {
      setBlockMsg("Add some text as block data");
      return;
    }

    setLoading(true);
    setBlockMsg(""); // Clear previous messages

    try {
      const response = await axios.post(
        `${API_BASE}/addBlock`,
        { data: blockData }
      );
      
      // Limit the block hash to 7 characters and append "..."
      const limitedHash = `${response.data.block.hash.slice(0, 7)}...`;
      
      // Display success message with the truncated block hash
      const blockHash = `Block added successfully!\nBlock Hash: ${limitedHash}`;
      setBlockMsg(blockHash);
    } catch (error) {
      setBlockMsg("Failed to add block. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-10 mt-5 bg-gray-100 flex items-center justify-center p-3 sm:p-3 rounded-lg">
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-full mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Create New Block
        </h1>

        <input
          type="text"
          placeholder="Enter text data for the block"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={blockData}
          onChange={handleDataInput}
        />

        <div className="flex justify-center">
          <button
            className="w-40 bg-gray-800 text-white font-semibold p-3 rounded-lg hover:bg-gray-700 transition hover:scale-105"
            onClick={handleAddBlock}
            disabled={loading}
          >
            {loading ? "Mining new Block..." : "Add Block"}
          </button>
        </div>

        {blockMsg && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-300 rounded-lg text-center shadow-md w-full max-w-full break-words overflow-auto">
            <p className="text-sm font-semibold text-gray-700 whitespace-pre-wrap break-words">
              {blockMsg}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBlock;

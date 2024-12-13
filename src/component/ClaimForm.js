import React from "react";

const ClaimForm = () => {
  return (
    <div className="bg-gray-50 p-6 md:p-12 rounded-lg shadow-md">
      {/* Header */}
      <div className="text-lg font-semibold text-gray-700 mb-4">
        File your Claim. <span className="text-gray-400">(Approx 5 Minutes)</span>
      </div>

      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Claim Value Section */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-500">
              <i className="fas fa-calculator"></i>
            </span>
            <h3 className="font-semibold text-gray-700">Claim Value</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Contract Value
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="10,00,00"
                />
                <span className="text-gray-600">USD</span>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Claim Value
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="15,00,00"
                />
                <span className="text-gray-600">USD</span>
              </div>
              <span className="text-orange-500 text-xs">
                150% of Contract Value
              </span>
            </div>
          </div>
        </div>

        {/* Place Section */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-500">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <h3 className="font-semibold text-gray-700">Place</h3>
          </div>
          <div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Select the Place for proceedings"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Is the place for the proceedings the one mentioned in the agreement?
          </p>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center space-x-2 text-sm">
              <input type="radio" name="place" className="focus:ring-blue-400" />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2 text-sm">
              <input type="radio" name="place" className="focus:ring-blue-400" />
              <span>No</span>
            </label>
          </div>
        </div>

        {/* Language Section */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-500">
              <i className="fas fa-language"></i>
            </span>
            <h3 className="font-semibold text-gray-700">Language</h3>
          </div>
          <div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Select the language for proceedings"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Is the language for the proceedings the one mentioned in the
            agreement?
          </p>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="radio"
                name="language"
                className="focus:ring-blue-400"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="radio"
                name="language"
                className="focus:ring-blue-400"
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>
    
      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Statement Section */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-500">
              <i className="fas fa-file-alt"></i>
            </span>
            <h3 className="font-semibold text-gray-700">Statement</h3>
          </div>
          <div className="border-dashed border-2 border-blue-400 rounded-md p-4 text-center text-sm text-gray-500">
            Write your Statement Here <br /> or <br />
            <button className="mt-2 text-blue-500 underline">Upload a PDF</button>
          </div>
        </div>

        {/* Agreement Section */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-500">
              <i className="fas fa-file-contract"></i>
            </span>
            <h3 className="font-semibold text-gray-700">
              Agreement under Disputes
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="border-dashed border-2 border-blue-400 rounded-md p-4 text-center text-sm text-gray-500">
              Upload the Contract
              <br />
              <span className="text-gray-400">Max 2MB, PDF</span>
            </div>
            <div className="border-dashed border-2 border-blue-400 rounded-md p-4 text-center text-sm text-gray-500">
              Arbitration Agreement
              <br />
              <span className="text-gray-400">Max 2MB, PDF</span>
            </div>
          </div>
        </div>

        {/* Additional Documentation Section */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-500">
              <i className="fas fa-folder-open"></i>
            </span>
            <h3 className="font-semibold text-gray-700">
              Additional Documentation
            </h3>
          </div>
          <div className="border-dashed border-2 border-blue-400 rounded-md p-4 text-center text-sm text-gray-500">
            Upload Additional Files
            <br />
            <span className="text-gray-400">Max 2MB, PDF</span>
            <button className="mt-2 text-blue-500 underline">+</button>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default ClaimForm;

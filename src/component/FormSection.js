import React from 'react'

const FormSection = () => {
    return (
        <div className=" bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-bold">File your Claim (Approx 5 Minutes)</h3>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <label className="text-sm">Claim Value</label>
              <input
                type="text"
                placeholder="Contract Value"
                className="border rounded p-2 w-full mt-1"
              />
            </div>
            <div>
              <label className="text-sm">Place</label>
              <input
                type="text"
                placeholder="Select place for proceedings"
                className="border rounded p-2 w-full mt-1"
              />
            </div>
            <div>
              <label className="text-sm">Language</label>
              <select className="border rounded p-2 w-full mt-1">
                <option>Select language for proceedings</option>
                <option>English</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm">Statement</label>
            <textarea
              placeholder="Write your statement here"
              className="border rounded p-2 w-full mt-1 h-20"
            ></textarea>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <label className="text-sm">Agreement under Disputes</label>
              <input type="file" className="border rounded p-2 w-full mt-1" />
            </div>
            <div>
              <label className="text-sm">Additional Documentation</label>
              <input type="file" className="border rounded p-2 w-full mt-1" />
            </div>
          </div>
        </div>
      );
}

export default FormSection
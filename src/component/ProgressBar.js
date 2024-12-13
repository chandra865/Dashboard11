import React from "react";

const ProgressBar = () => {
  const steps = [
    { id: 1, label: "Preliminary", completed: true },
    { id: 2, label: "Your Details", completed: true },
    { id: 3, label: "KYC", completed: true },
    { id: 4, label: "Parties", completed: false, time: "Approx 5 Min" },
    { id: 5, label: "Claim", completed: false, time: "Approx 5 Min" },
    { id: 6, label: "Review", completed: false, time: "Approx 5 Min" },
    { id: 7, label: "Payment", completed: false, time: "Approx 5 Min" },
  ];

  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-md">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          {/* Step Circle */}
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                step.completed
                  ? "bg-blue-500 text-white"
                  : "border-2 border-gray-300 bg-white text-gray-400"
              }`}
            >
              {step.completed ? "✔" : step.id}
            </div>
            <span
              className={`text-sm mt-2 ${
                step.completed ? "text-black font-semibold" : "text-gray-400"
              }`}
            >
              {`${step.id}. ${step.label}`}
            </span>
            {step.time && !step.completed && (
              <span className="text-xs text-gray-400">{step.time}</span>
            )}
          </div>

          {/* Progress Line */}
          {index < steps.length - 1 && (
            <div
              className={`h-0.5 ${
                steps[index + 1].completed ? "bg-blue-500" : "bg-gray-300"
              } mx-2`}
              style={{ width: "50px" }} // Adjust width for line length
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;

// "use client";
import { UseFormRegister } from "react-hook-form";

// type FormData = {
//   [key: string]: {
//     id: string;
//     type: "mcq" | "text";
//     answer: string;
//     options?: string[];
//   };
// };

type QuestionProps = {
  id: string;
  type: string;
  question: string;
  options?: string[];
  register: UseFormRegister<{
    questions: { type: "mcq" | "text"; id: string; answer: string }[];
  }>;
  fieldName:
    | `questions.${number}.answer`
    | `questions.${number}.id`
    | `questions.${number}.type`;
  error?: string;
  selectedAnswer?: string;
};

const Question: React.FC<QuestionProps> = ({
  id,
  type,
  question,
  options = [],
  register,
  fieldName,
  error,
  selectedAnswer,
}) => {
  // Ensure fieldName is defined before passing it to the register function
  const field = fieldName || `questions.${id}.answer`; // Default to a valid field name if not provided
  console.log(field);

  return (
    <div className="p-6 bg-white rounded-md w-full space-y-4 main-box-shadow">
      {/* Question Header */}
      <div>
        <p className="text-xs">Question</p>
        <p className="text-base mt-2">{question}</p>
      </div>

      {/* Question Input */}
      {type === "mcq" ? (
        <div className="space-y-2">
          {options.map((option, index) => (
            <label
              key={index}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer bg-[#F5F5F5] ${
                selectedAnswer === option
                  ? "border border-blue-500"
                  : error && "border-red-500"
              }`}
            >
              <input
                type="radio"
                value={option}
                {...register(fieldName)}
                className="hidden"
              />
              <span className="text-gray-500 text-sm">{option}</span>
            </label>
          ))}
        </div>
      ) : (
        <textarea
          rows={4}
          {...register(fieldName)}
          className={`w-full p-3 border rounded-md resize-none ${
            error ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="Write your answer here..."
        ></textarea>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Question;

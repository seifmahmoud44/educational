"use client";

import React, { useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Question from "./Question"; // Import your Question component

const schema = z.object({
  questions: z.array(
    z.object({
      id: z.string(),
      type: z.enum(["mcq", "text"]),
      answer: z.string().min(1, "Answer is required"),
    })
  ),
});

type FormData = z.infer<typeof schema>;

const Exam = () => {
  const questions: {
    id: string;
    type: "mcq" | "text";
    question: string;
    options?: string[];
  }[] = [
    {
      id: "q1",
      type: "mcq",
      question: "What is your favorite programming language?",
      options: ["JavaScript", "Python", "C++", "Ruby"],
    },
    {
      id: "q2",
      type: "text",
      question: "Explain why you chose that programming language.",
      options: [],
    },
    {
      id: "q3",
      type: "text",
      question: "Explain why you chose that programming language.",
      options: [],
    },
  ];

  const {
    control,
    register,
    watch,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      questions: questions.map((q) => ({
        id: q.id,
        type: q.type,
        answer: "",
        options: q.options,
      })),
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "questions",
  });

  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onSubmit = (data: FormData) => {
    console.log("Collected Data:", data);
  };

  const onError = () => {
    const firstErrorIndex = fields.findIndex(
      (_, index) => errors.questions?.[index]?.answer
    );
    if (firstErrorIndex !== -1 && questionRefs.current[firstErrorIndex]) {
      questionRefs.current[firstErrorIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  // Watch all answers to determine the selected options
  const answers = watch("questions");

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="space-y-6 w-full max-w-3xl mx-auto"
    >
      {fields.map((field, index) => (
        <div
          key={field.id}
          ref={(el) => {
            if (el) {
              questionRefs.current[index] = el;
            }
          }}
          className="space-y-4"
        >
          <Question
            id={field.id}
            question={questions[index].question}
            type={questions[index].type}
            options={questions[index].options}
            register={register}
            fieldName={`questions.${index}.answer`}
            error={errors.questions?.[index]?.answer?.message}
            selectedAnswer={answers[index]?.answer}
          />
        </div>
      ))}

      <button
        type="submit"
        className="px-4 py-2 bg-[#0248AB]
        font-semibold w-52 text-center mx-auto text-white rounded-lg text-sm block"
      >
        Confirm
      </button>
    </form>
  );
};

export default Exam;

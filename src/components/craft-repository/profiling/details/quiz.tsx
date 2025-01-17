"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Gift, Trophy, Timer, Loader2, Copy } from "lucide-react";
import { useQuiz } from "~/hooks/use-quiz";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { useMemo, useState } from "react";
import { QuizResultDialog } from "~/components/craft-repository/profiling/details/result-dialog";
import { useOpen } from "~/hooks/use-profile";
import { useRouter } from "next/navigation";

type QuizQuestion = {
  quizId: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
};

type QuizCardProps = {
  questions: QuizQuestion[];
  sectionId: string;
};

export const QuizCard = ({ questions, sectionId }: QuizCardProps) => {
  const { sections, code } = useOpen();
  const { answers, setAnswer, clearAnswers } = useQuiz();

  const [showDiscountButton, setShowDiscountButton] = useState<boolean>(false);
  const [resultDialog, setResultDialog] = useState<{
    isOpen: boolean;
    data: { success: boolean; message: string } | null;
    validationCompleted: boolean;
  }>({
    isOpen: false,
    data: null,
    validationCompleted: false,
  });

  const submitMutation = api.craft.submitQuizAnswers.useMutation({
    onSuccess: (data) => {
      setResultDialog({
        isOpen: true,
        data,
        validationCompleted: false,
      });
      setShowDiscountButton(true);
      clearAnswers();
      if(!data.success){
        window.location.reload()
      }
    },
    onError: (error) => {
      clearAnswers();
      setResultDialog({
        isOpen: true,
        data: { success: false, message: error.message },
        validationCompleted: false,
      });
      window.location.reload()
    },
  });

  const handleSubmit = () => {
    if (answers.length !== questions.length) {
      setResultDialog({
        isOpen: true,
        data: {
          success: false,
          message: "Please answer all questions before submitting.",
        },
        validationCompleted: false,
      });
      return;
    }

    submitMutation.mutate({
      answers: answers.map((answer) => ({
        quizId: answer.quizId,
        selectedOption: answer.selectedOption,
      })),
    });
  };

  const isPresent = useMemo(
    () => sections.find((sec) => sec.id === sectionId)?.completed ?? false,
    [sections, sectionId],
  );

  const handleOptionChange = (quizId: string, value: string) => {
    setAnswer(quizId, value);
  };

  const handleDialogClose = (open: boolean) => {
    setResultDialog((prev) => ({ ...prev, isOpen: open }));
    if (!open && resultDialog.validationCompleted) {
      setShowDiscountButton(false);
    }
  };

  const handleValidationComplete = () => {
    setResultDialog((prev) => ({ ...prev, validationCompleted: true }));
    setShowDiscountButton(false);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (isPresent)
    return (
      <Card className="border-t-4 border-t-primary">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Copy your discount code</h3>
            </div>

            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              Your discount code is {code}
            </code>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(code)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Trophy className="h-6 w-6 text-primary" />
            Knowledge Check Challenge
          </CardTitle>
          <CardDescription className="text-base font-bold">
            Complete this quiz to test your understanding and unlock special
            rewards!
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Alert>
            <Gift className="h-4 w-4" />
            <AlertTitle>Rewards Await!</AlertTitle>
            <AlertDescription>
              Score 80% or higher to receive an exclusive discount code for your
              next purchase.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
              <Timer className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">No Time Limit</p>
                <p className="text-sm text-muted-foreground">
                  Take your time to answer
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
              <Trophy className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">{questions.length} Questions</p>
                <p className="text-sm text-muted-foreground">
                  Multiple choice format
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
              <Gift className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Instant Rewards</p>
                <p className="text-sm text-muted-foreground">
                  Get code upon completion
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-primary">
              When Knowledge is the True Currency, Every Purchase Matters
            </p>
            <p className="text-base font-bold text-secondary">
              Make Informed Purchases, Not Just Transactions
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-6">
        {questions.map((question, questionIndex) => (
          <Card key={question.quizId} className="overflow-hidden">
            <CardHeader className="border-b bg-muted/20">
              <CardTitle className="flex items-start gap-3 font-montserrat text-lg sm:items-center">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-base text-white sm:h-6 sm:w-6 sm:text-sm">
                  {questionIndex + 1}
                </span>
                <span className="pt-1 sm:pt-0">{question.question}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <RadioGroup
                key={question.quizId}
                className="space-y-3"
                value={
                  answers.find((a) => a.quizId === question.quizId)
                    ?.selectedOption
                }
                onValueChange={(value) =>
                  handleOptionChange(question.quizId, value)
                }
              >
                {[
                  question.option1,
                  question.option2,
                  question.option3,
                  question.option4,
                ].map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-3 rounded-lg border p-4 transition-all hover:border-primary hover:bg-muted/10"
                  >
                    <RadioGroupItem
                      value={option}
                      id={`${question.quizId}-option${index + 1}`}
                    />
                    <span className="flex-1">{option}</span>
                  </label>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        ))}
      </div>
      {questions.length != 0 && (
        <Card className="border-t-4 border-t-primary">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">Ready to submit?</h3>
                <p className="text-sm text-muted-foreground">
                  You&apos;ve answered {answers.length} out of{" "}
                  {questions.length} questions
                </p>
              </div>

              {showDiscountButton && resultDialog.data?.success ? (
                <Button
                  type="button"
                  onClick={() => {
                    setResultDialog((prev) => ({ ...prev, isOpen: true }));
                  }}
                  className="w-full sm:w-auto sm:min-w-[120px]"
                >
                  Validate Discount
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={
                    submitMutation.isPending ||
                    answers.length !== questions.length
                  }
                  className="w-full sm:w-auto sm:min-w-[120px]"
                >
                  {submitMutation.isPending ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Checking...</span>
                    </div>
                  ) : (
                    "Submit Quiz"
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}
      <QuizResultDialog
        isOpen={resultDialog.isOpen}
        onOpenChange={handleDialogClose}
        data={resultDialog.data}
        onValidationComplete={handleValidationComplete}
      />
    </div>
  );
};

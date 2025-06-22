import { useAppDispatch, useAppSelector } from "@/hooks/selectors";
import { Questions } from "@/data/test/questions";
import { useCallback, useEffect, useState } from "react";
import type { osVariant } from "@/data/types/osVariant";
import { Answer, NextButton } from "@/components/Answer";
import { Result } from "@/components/Result";
import { addAnswer, restore } from "@/store/testSlice";

const TestPage = () => {
  const count = useAppSelector((state) => state.questionCounter);
  const completed = useAppSelector((state) => state.completed);

  const [currentChecked, setCurrentChecked] = useState<osVariant>();
  const [visible, setVisible] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onClickNext = useCallback(() => {
    setVisible(false);
    const checked = currentChecked;
    setCurrentChecked(undefined);
    setTimeout(() => {
      checked && dispatch(addAnswer(currentChecked));
      setVisible(true);
    }, 200);
  }, [currentChecked]);

  const restoreHandler = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      dispatch(restore());
    }, 200);
  }, []);

  const onChoose = useCallback(
    (variant: osVariant) => setCurrentChecked(variant),
    []
  );

  useEffect(() => {
    setVisible(true);
    console.log("VISIBLE");
  }, [completed]);

  return (
    <div>
      <div
        className={`transition-all ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {completed && <Result result={completed} />}
        {completed
          ? ""
          : Questions[count] && (
              <>
                <h1 className="font-unbounded text-xl text-center">
                  {Questions[count].question}
                </h1>
                <br />
                {(Object.keys(Questions[count].answers) as osVariant[]).map(
                  (variant) => (
                    <Answer
                      id={count}
                      answer={Questions[count].answers[variant]}
                      variant={variant}
                      checked={currentChecked === variant}
                      onChoose={onChoose}
                      key={variant}
                    />
                  )
                )}
              </>
            )}
      </div>
      <br />
      <NextButton
        onClick={completed ? restoreHandler : onClickNext}
        disabled={!completed && !currentChecked}
      >
        {completed ? "reset" : "next"}
      </NextButton>
    </div>
  );
};

export default TestPage;

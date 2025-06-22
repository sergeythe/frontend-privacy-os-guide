import { useAppDispatch, useAppSelector } from "@/hooks/selectors";
import { Questions } from "@/data/test/questions";
import { useCallback, useEffect, useState } from "react";
import type { osVariant } from "@/data/types/osVariant";

const TestPage = () => {
  const count = useAppSelector((state) => state.questionCounter);
  const completed = useAppSelector((state) => state.completed);

  const [currentChecked, setCurrentChecked] = useState<osVariant>();
  const [visible, setVisible] = useState<boolean>(false);

  const dispatch = useAppDispatch();

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
                    <button>{variant}</button>
                  )
                )}
              </>
            )}
      </div>
      <br />
    </div>
  );
};

export default TestPage;

export const Result = ({ result }: { result: string[] }) => {
  return (
    <div className="flex flex-col justify-center">
      <span className="text-3xl font-unbounded text-sky-800 text-center">
        Recommended for you:{" "}
        <span className="font-bold uppercase">{result.join(" & ")}</span>
      </span>
    </div>
  );
};

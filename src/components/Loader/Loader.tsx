import loader from "@/assets/icons/loader.png";

export const Loader = () => {
  return (
    <span className="flex items-center gap-2 m-4 ml-8 justify-start">
      <img
        src={loader}
        alt=""
        className="h-6 animate-spin select-none"
        draggable={false}
      />
      Loading
    </span>
  );
};

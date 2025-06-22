import { ButtonOS } from "@/components/ButtonOS";
import type { OS } from "@/data/types/os";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader } from "@/components/Loader";
import screenshot from "@/assets/images/screenshot.png";
import { BASE_URL } from "@/data/config/server";

async function fetchOSList() {
  const response = await axios.get<OS[]>(BASE_URL, {
    timeout: 3000,
  });
  return response.data;
}

const HomePage = () => {
  const { data, status } = useQuery<OS[]>({
    queryKey: ["os_list"],
    queryFn: fetchOSList,
  });

  return (
    <div className="text-justify">
      <h1 className="text-3xl font-bold font-unbounded">About</h1>
      <br />
      <img
        src={screenshot}
        alt="Screenshot"
        draggable={false}
        className="max-w-1/2 lg:max-w-1/4 max-h-1/3 float-right rounded-xl shadow select-none ml-4"
      />
      <p>
        The site dedicated to secure operating systems offers users a wealth of
        information about various operating systems designed for privacy and
        data protection. Here you will find detailed reviews of systems such as
        Tails, Whonix, and Qubes OS, as well as their key features, advantages,
        and disadvantages. The resource is aimed at users who seek to improve
        their security on the Internet and are looking for reliable solutions to
        protect personal information.
      </p>
      <br />
      <p>
        In addition, the site provides step-by-step instructions on how to
        install and configuration of these operating systems, which makes the
        process accessible even for beginners. Users can read the
        recommendations for use and best practices to ensure maximum Security.
        In addition to this, the site regularly publishes Cybersecurity news and
        updates, allowing stay up to date with the latest trends and
        technologies.
      </p>
      <br />
      <h2 className="text-xl font-semibold font-unbounded">
        OS Overviews and Instructions:
      </h2>
      {(status === "success" && (
        <nav className="mt-10 flex w-full items-stretch flex-wrap gap-4">
          {data.map((os, index) => (
            <ButtonOS os={os} key={index} />
          ))}
        </nav>
      )) ||
        (status === "error" && (
          <span className="block m-4 font-semibold">Fetch data error</span>
        )) ||
        (status === "pending" && <Loader />)}
    </div>
  );
};

export default HomePage;

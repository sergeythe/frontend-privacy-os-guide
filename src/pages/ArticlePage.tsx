import { useParams } from "react-router";
import NotFound from "@/pages/NotFound";
import axios from "axios";
import type { Article } from "@/data/types/article";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/components/Loader";
import { Fragment } from "react";
import { BASE_URL } from "@/data/config/server";

async function fetchArticleBySlug(slug: string) {
  const response = await axios.get<Article>(`${BASE_URL}/${slug}`, {
    timeout: 3000,
  });
  return response.data;
}

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data, status } = useQuery<Article>({
    queryKey: ["article", slug],
    queryFn: () => fetchArticleBySlug(slug!),
  });

  if (!slug) return <NotFound />;

  if (status === "error") {
    return <NotFound />;
  } else if (status === "pending") {
    return (
      <main>
        <Loader />
      </main>
    );
  } else {
    return (
      <main>
        <h1 className="text-xl font-bold">{data.title}</h1>
        <hr className="my-4 text-sky-600" />
        <img
          src={`${BASE_URL}/${data.content.image}`}
          alt="image"
          draggable={false}
          className="w-1/3 h-auto float-left rounded-xl shadow select-none mr-4"
        />
        {data.content.paragraphs.map((paragraph, index, array) => (
          <Fragment key={index}>
            <p>{paragraph}</p>
            {index !== array.length - 1 && <br />}
          </Fragment>
        ))}

        <hr className="my-4 text-sky-600" />

        <a
          href={data.site}
          target="blank"
          className="text-sky-600 cursor-pointer hover:text-sky-400 underline"
        >
          Website - {data.site}
        </a>
      </main>
    );
  }
};

export default ArticlePage;

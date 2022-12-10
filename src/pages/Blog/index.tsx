import { HeroBanner } from "../../components/HeroBanner";
import { PostDate, PostListBody, PostsContainer, PostsListHeader, PostTitle } from "./styles";
import { Link } from 'react-router-dom'
import useSWR from "swr";


const fetcher = (url: string) => fetch(url).then(r => r.json())

export function Blog() {

  const { data, error } = useSWR('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@olavocarvlho', fetcher)

  console.log(data);
  console.log(error);


  return (
    <>
      <HeroBanner>
        <h1>I enjoy thinking about how I work, design and live, whenever possible.</h1>
        <p>Here are some of the more recent stories and ideas I’ve published.</p>
      </HeroBanner>

      <PostsContainer>
        <PostsListHeader>Posts</PostsListHeader>
        <PostListBody>
          <Link to="/blog/1">
            <PostTitle>Conducting a product discovery</PostTitle>
            <PostDate>Feb 17, 2020</PostDate>
          </Link>
          <Link to="/blog/1">
            <PostTitle>Conducting a product discovery</PostTitle>
            <PostDate>Feb 17, 2020</PostDate>
          </Link>
          <Link to="/blog/1">
            <PostTitle>Conducting a product discovery</PostTitle>
            <PostDate>Feb 17, 2020</PostDate>
          </Link>
        </PostListBody>

      </PostsContainer>
    </>

  )
}